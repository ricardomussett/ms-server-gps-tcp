import { Injectable, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { LimitSpeed, ShiftRoute } from '../../domain/interface/proccessor.interface'
import { AlarmRepository } from '../../domain/repository/alarm.repository'

@Injectable()
export class AlarmService {
  private limitSpeedList: LimitSpeed[] = []
  private shiftRouteList: ShiftRoute[] = []
  private readonly logger = new Logger(AlarmService.name)
  private readonly REFRESH_INTERVAL: number

  constructor(
    private readonly alarmRepository: AlarmRepository,
    private readonly configService: ConfigService,
  ) {
    this.REFRESH_INTERVAL = this.configService.get<number>('LIGHT_ALARM_REFRESH_INTERVAL') || 180000
    this.refreshLimitSpeed()
    this.refreshShiftRoute()
    this.setupRefreshInterval()
  }

  private setupRefreshInterval() {
    setInterval(() => {
      this.refreshLimitSpeed()
      this.refreshShiftRoute()
    }, this.REFRESH_INTERVAL)
  }

  private async refreshLimitSpeed() {
    try{
      const limitSpeed = await this.alarmRepository.findLimitSpeed({
        where: {
          isActive: true,
        },
        select: {
          id: true,
          speed_start: true,
          speed_end: true,
          type: true,
          isActive: true,
        },
      })
      this.limitSpeedList = limitSpeed

      this.logger.log(`Lista limit speed actualizada. Total de limit speed: ${this.limitSpeedList.length}`)
    } catch (error) {
      this.logger.error(`Error al actualizar la lista limit speed: ${error.message}`)
    }
  }

  private async refreshShiftRoute() {
    try {
        const shiftRoute = await this.alarmRepository.findShiftRoute({
          where: {
            isActive: true,
          },
          select: {
            id: true,
            hour_start: true,
            hour_end: true,
            type: true,
            isActive: true,
          },
        })

        this.shiftRouteList = shiftRoute

      this.logger.log(`Lista shift actualizada. Total de shift: ${this.shiftRouteList.length}`)
    } catch (error) {
      this.logger.error(`Error al actualizar la lista shift: ${error.message}`)
    }
  }

  getLimitSpeed(speed: number): string {
    try {
      // Validar que speed sea un número válido
      if (typeof speed !== 'number' || isNaN(speed)) {
        this.logger.warn(`Velocidad inválida proporcionada: ${speed}`);
        return '0';
      }

      // Si la lista está vacía, no hay límites que evaluar
      if (!this.limitSpeedList.length) {
        this.logger.warn('Lista de límites de velocidad vacía');
        return '0';
      }

      // Buscar el rango correspondiente al valor de speed
      const rango = this.limitSpeedList.find(({ speed_start, speed_end }) =>
        speed >= speed_start && speed <= speed_end
      );

      if (rango) {
        // Retornar el tipo de alarma como string
        return rango.type.toString();
      }

      // No se encontró coincidencia
      return '0';
    } catch (error) {
      this.logger.error(`Error al determinar límite de velocidad: ${error.message}`);
      return '0';
    }
  }

getNightTraffic(timestamp: Date): string {
  try {
    // Obtener la fecha actual en formato "YYYY-MM-DD" para construir la hora completa
    const dateStr = timestamp.toISOString().split('T')[0]; // "YYYY-MM-DD"

    // Convertir la hora actual a un objeto Date completo
    const currentTime = new Date(`${dateStr}T${timestamp.toTimeString().split(' ')[0]}`);

    // Buscar el turno (shift) que coincide con la hora
    const shift = this.shiftRouteList.find((shiftRoute) => {
      // Convertir hour_start y hour_end a objetos Date completos
      const startTime = new Date(`${dateStr}T${shiftRoute.hour_start}`);
      const endTime = new Date(`${dateStr}T${shiftRoute.hour_end}`);

      // Comparar si la hora actual está dentro del rango
      return currentTime >= startTime && currentTime <= endTime;
    });

    // Si se encuentra un turno, devolver su tipo como string
    return shift ? shift.type.toString() : '0'; // '0' si no se encuentra ningún turno
  } catch (error) {
    this.logger.error(`Error al determinar el tráfico nocturno: ${error.message}`);
    return '0'; // Devuelve '0' en caso de error
  }
}

}
