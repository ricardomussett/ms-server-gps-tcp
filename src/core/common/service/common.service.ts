import { Injectable } from '@nestjs/common'
import { IStatus } from 'src/app/status/domain/interface/status.interface'
import { TcpService } from 'src/app/tcp/application/service/tcp.service'
import { ITcpStatus } from 'src/core/interface/tcp-status.interface'
import { RedisService } from 'src/core/redis/service/redis.service'
import { CommonRepository } from '../repository/common.repository'

@Injectable()
export class CommonService {
  constructor(
    private readonly commonRepository: CommonRepository,
    private readonly tcpService: TcpService,
    private readonly redisService: RedisService,
  ) {}

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
  async status(): Promise<IStatus> {
    let databaseStatus = 'disconnected'
    let redisStatus = 'disconnected'
    let systemStatus = 'active'
    const error = null
    let tcpStatus: ITcpStatus | null = null

    try {
      // Verificamos la conexión a la base de datos
      await this.commonRepository.getStatus()
      databaseStatus = 'connected'
    } catch (error) {
      console.error('Error de conexión a la base de datos:', error)
      systemStatus = 'error'
    }

    try {
      // Verificamos la conexión a Redis
      redisStatus = await this.redisService.checkRedisConnection()
    } catch (error) {
      console.error('Error de conexión a Redis:', error)
      redisStatus = 'disconnected'
    }

    try {
      // Verificamos si el servidor TCP está en ejecución
      tcpStatus = this.tcpService.getStatus() || null
    } catch (error) {
      console.error('Error al obtener clientes TCP:', error)
      tcpStatus = null
    }

    const statusRecord = {
      status: systemStatus,
      database: databaseStatus,
      redis: redisStatus,
      tcpStatus: tcpStatus,
      error: error,
    }

    return statusRecord
  }
}
