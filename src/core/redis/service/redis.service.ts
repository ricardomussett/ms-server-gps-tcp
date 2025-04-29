import { Injectable } from '@nestjs/common'
import { createClient } from 'redis'
import { redisConfig } from 'src/core/constant/redis-config'

@Injectable()
export class RedisService {
  private redisClient: ReturnType<typeof createClient>
  private redisConnected = false

  constructor() {
    // Inicializar el cliente Redis
    this.createClient()
    this.manageClient()
  }

  private createClient() {
    this.redisClient = createClient({
      url: `redis://${redisConfig.host}:${redisConfig.port}`,
      socket: {
        reconnectStrategy: (retries) => {
          // Limitar el número de intentos de reconexión
          if (retries > 3) {
            this.redisConnected = false
            return new Error('Max retries reached')
          }
          return Math.min(retries * 100, 1000)
        },
      },
    })
  }

  private manageClient() {
    // Manejar eventos de error y reconexión
    this.redisClient.on('error', (err) => {
      console.error('Error de Redis:', err)
      this.redisConnected = false
    })

    this.redisClient.on('connect', () => {
      console.log('Conectado a Redis')
      this.redisConnected = true
    })

    this.redisClient.on('end', () => {
      console.log('Conexión a Redis finalizada')
      this.redisConnected = false
    })

    // Intentar conectar al inicio
    this.connectRedis().catch((error) => {
      console.error('Error al conectar a Redis:', error)
      this.redisConnected = false
    })
  }

  /**
   * Intenta establecer una conexión con el servidor Redis
   * Solo intenta conectar si el cliente no está ya conectado
   *
   * @async
   * @returns {Promise<void>}
   *
   * @description
   * - Verifica si el cliente Redis está abierto
   * - Si no está abierto, intenta establecer la conexión
   * - Actualiza el estado de la conexión (redisConnected)
   * - En caso de error, registra el error y marca la conexión como fallida
   */
  public async connectRedis() {
    try {
      // Verificar si el cliente ya está conectado
      if (!this.redisClient.isOpen) {
        // Intentar establecer la conexión
        await this.redisClient.connect()
        this.redisConnected = true
      }
    } catch (error) {
      // Registrar el error y marcar como desconectado
      console.error('Error al conectar a Redis:', error)
      this.redisConnected = false
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
  public async checkRedisConnection(): Promise<string> {
    try {
      // Verificamos si el cliente Redis está abierto
      if (this.redisClient.isOpen) {
        // Creamos una promesa para el ping con timeout de 1 segundo
        const pingPromise = this.redisClient.ping()
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 1000))

        // Ejecutamos el ping con timeout
        await Promise.race([pingPromise, timeoutPromise])
        this.redisConnected = true
        return 'connected'
      }

      // Si el cliente está cerrado, intentamos reconectar
      await this.connectRedis()
      return this.redisConnected ? 'connected' : 'disconnected'
    } catch (error) {
      // En caso de error, registramos y marcamos como desconectado
      console.error('Error de conexión a Redis:', error)
      this.redisConnected = false
      return 'disconnected'
    }
  }
}
