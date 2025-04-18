from locust import User, task, between
import socket
import struct
import random
import time
import logging
import os

# Configurar logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class TcpClient:
    def __init__(self, host, port):
        self.host = host
        self.port = port
        self.socket = None
        logger.info(f"Inicializando cliente TCP para {host}:{port}")

    def connect(self):
        try:
            self.socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            # Configurar opciones del socket
            self.socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            self.socket.settimeout(10)  # Aumentar timeout a 10 segundos
            logger.info(f"Intentando conectar a {self.host}:{self.port}")
            self.socket.connect((self.host, self.port))
            logger.info("Conexión establecida exitosamente")
        except socket.timeout:
            logger.error("Timeout al conectar")
            raise
        except ConnectionRefusedError:
            logger.error("Conexión rechazada. Verifica que el servidor esté corriendo y el puerto sea correcto")
            raise
        except Exception as e:
            logger.error(f"Error al conectar: {str(e)}")
            raise

    def disconnect(self):
        if self.socket:
            try:
                self.socket.close()
                logger.info("Conexión cerrada")
            except Exception as e:
                logger.error(f"Error al cerrar conexión: {str(e)}")
            finally:
                self.socket = None

    def send_packet(self):
        try:
            # Paquete fijo en formato hexadecimal
            hex_packet = '24248000256204c724250416112036010304868665447000000000c0470000000c0a0000000001ff380d'
            packet = bytes.fromhex(hex_packet)
            
            logger.info(f"Enviando paquete de {len(packet)} bytes")
            logger.info(f"Contenido del paquete (hex): {packet.hex()}")
            
            # Enviar paquete
            self.socket.send(packet)
            logger.info("Paquete enviado, esperando respuesta...")
            
            # Recibir respuesta con timeout
            response = self.socket.recv(1024)
            if response:
                logger.info(f"Respuesta recibida: {response.hex()}")
                return response
            else:
                logger.error("No se recibió respuesta (socket cerrado)")
                raise Exception("No se recibió respuesta")
                
        except socket.timeout:
            logger.error("Timeout esperando respuesta")
            raise
        except Exception as e:
            logger.error(f"Error al enviar/recibir paquete: {str(e)}")
            raise

class TcpUser(User):
    wait_time = between(1, 2)  # Tiempo de espera entre tareas
    
    def on_start(self):
        try:
            # Obtener host y puerto de las variables de entorno o usar valores por defecto
            host = os.getenv('TCP_HOST', 'localhost')
            port = int(os.getenv('TCP_PORT', '81'))
            logger.info(f"Conectando a {host}:{port}")
            self.client = TcpClient(host, port)
            self.client.connect()
        except Exception as e:
            logger.error(f"Error en on_start: {str(e)}")
            raise
    
    def on_stop(self):
        try:
            self.client.disconnect()
        except Exception as e:
            logger.error(f"Error en on_stop: {str(e)}")
    
    @task
    def send_gps_packet(self):
        start_time = time.time()
        try:
            response = self.client.send_packet()
            self.environment.events.request.fire(
                request_type="TCP",
                name="send_gps_packet",
                response_time=int((time.time() - start_time) * 1000),
                response_length=len(response),
                exception=None
            )
        except Exception as e:
            logger.error(f"Error en send_gps_packet: {str(e)}")
            self.environment.events.request.fire(
                request_type="TCP",
                name="send_gps_packet",
                response_time=int((time.time() - start_time) * 1000),
                response_length=0,
                exception=e
            ) 