import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { createClient } from 'redis';
import { redisConfig } from '../../config/redis.config';
import { TcpService } from '../../tcp/service/tcp.service';

@Injectable()
export class StatusService {
  private redisClient;
  private redisConnected = false;

  constructor(
    private readonly prisma: PrismaService,
    private readonly tcpService: TcpService
  ) {
    // Inicializar el cliente Redis
    this.redisClient = createClient({
      url: `redis://${redisConfig.host}:${redisConfig.port}`,
      socket: {
        reconnectStrategy: (retries) => {
          // Limitar el número de intentos de reconexión
          if (retries > 3) {
            this.redisConnected = false;
            return new Error('Max retries reached');
          }
          return Math.min(retries * 100, 1000);
        }
      }
    });

    // Manejar eventos de error y reconexión
    this.redisClient.on('error', (err) => {
      console.error('Error de Redis:', err);
      this.redisConnected = false;
    });

    this.redisClient.on('connect', () => {
      console.log('Conectado a Redis');
      this.redisConnected = true;
    });

    this.redisClient.on('end', () => {
      console.log('Conexión a Redis finalizada');
      this.redisConnected = false;
    });

    // Intentar conectar al inicio
    this.connectRedis();
  }

  /**
   * Intenta establecer una conexión con el servidor Redis
   * Solo intenta conectar si el cliente no está ya conectado
   * 
   * @private
   * @async
   * @returns {Promise<void>}
   * 
   * @description
   * - Verifica si el cliente Redis está abierto
   * - Si no está abierto, intenta establecer la conexión
   * - Actualiza el estado de la conexión (redisConnected)
   * - En caso de error, registra el error y marca la conexión como fallida
   */
  private async connectRedis() {
    try {
      // Verificar si el cliente ya está conectado
      if (!this.redisClient.isOpen) {
        // Intentar establecer la conexión
        await this.redisClient.connect();
        this.redisConnected = true;
      }
    } catch (error) {
      // Registrar el error y marcar como desconectado
      console.error('Error al conectar a Redis:', error);
      this.redisConnected = false;
    }
  }

  /**
   * Verifica y registra el estado de las conexiones del sistema
   * 
   * Este método realiza las siguientes acciones:
   * 1. Verifica la conexión a la base de datos mediante una consulta simple
   * 2. Verifica la conexión a Redis usando checkRedisConnection()
   * 3. Crea un registro en la base de datos con el estado de las conexiones
   * 4. En caso de error:
   *    - Registra el error en consola
   *    - Crea un registro de error en la base de datos
   * 
   * @returns {Promise<Object>} Objeto con el estado del sistema que incluye:
   *  - status: Estado general del sistema ('active' o 'error')
   *  - database: Estado de la conexión a la base de datos ('connected' o 'disconnected') 
   *  - redis: Estado de la conexión a Redis ('connected' o 'disconnected')
   *  - error?: Mensaje de error si ocurrió alguno
   *  - timestamp: Fecha y hora del registro
   */
  async status() {
    try {
      // Verificamos la conexión a la base de datos
      await this.prisma.$queryRaw`SELECT 1`;
      
      // Verificamos la conexión a Redis
      const redisStatus = await this.checkRedisConnection();
      
      // Obtenemos el número de clientes TCP conectados
      const tcpClients = this.tcpService.getConnectedClients();
      
      // Creamos un nuevo registro de status
      const statusRecord = await this.prisma.status.create({
        data: {
          status: 'active',
          database: 'connected',
          redis: redisStatus,
          tcpClients: tcpClients,
        }
      });

      return {
        status: statusRecord.status,
        database: statusRecord.database,
        redis: statusRecord.redis,
        tcpClients: statusRecord.tcpClients,
        timestamp: statusRecord.timestamp,
      };
    } catch (error) {
      console.error('Error de conexión:', error);
      
      // Creamos un registro de error
      const statusRecord = await this.prisma.status.create({
        data: {
          status: 'error',
          database: 'disconnected',
          redis: 'disconnected',
          tcpClients: 0,
          error: error.message,
        }
      });

      return {
        status: statusRecord.status,
        database: statusRecord.database,
        redis: statusRecord.redis,
        tcpClients: statusRecord.tcpClients,
        error: statusRecord.error,
        timestamp: statusRecord.timestamp,
      };
    }
  }

  /**
   * Verifica el estado de la conexión con Redis
   * 
   * Este método realiza las siguientes acciones:
   * 1. Si el cliente Redis está abierto:
   *    - Intenta hacer un ping con un timeout de 1 segundo
   *    - Si el ping es exitoso, marca la conexión como activa
   * 2. Si el cliente está cerrado:
   *    - Intenta reconectar usando connectRedis()
   * 3. En caso de error:
   *    - Registra el error y marca la conexión como inactiva
   * 
   * @returns {Promise<string>} Estado de la conexión ('connected' o 'disconnected')
   */
  private async checkRedisConnection(): Promise<string> {
    try {
      // Verificamos si el cliente Redis está abierto
      if (this.redisClient.isOpen) {
        // Creamos una promesa para el ping con timeout de 1 segundo
        const pingPromise = this.redisClient.ping();
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Timeout')), 1000)
        );
        
        // Ejecutamos el ping con timeout
        await Promise.race([pingPromise, timeoutPromise]);
        this.redisConnected = true;
        return 'connected';
      }

      // Si el cliente está cerrado, intentamos reconectar
      await this.connectRedis();
      return this.redisConnected ? 'connected' : 'disconnected';
    } catch (error) {
      // En caso de error, registramos y marcamos como desconectado
      console.error('Error de conexión a Redis:', error);
      this.redisConnected = false;
      return 'disconnected';
    }
  }
}
