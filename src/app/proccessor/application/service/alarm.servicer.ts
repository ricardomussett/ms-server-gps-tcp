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

  getNightTraffic(timestamp: Date, speed: number): string {
    try {

      if (speed < 0) {
        return '0'
      }
      // Validar que exista lista de turnos
      if (!this.shiftRouteList || !this.shiftRouteList.length) {
        this.logger.warn('Lista de rutas shift vacía');
        return '0';
      }

      const currentTime = new Date(timestamp);
      
      // Recorrer cada turno activo
      for (const route of this.shiftRouteList) {
        if (!route.isActive) continue;

        // Extraer horas, minutos y segundos de inicio/fin
        const [startH, startM, startS = '00'] = route.hour_start.split(':');
        const [endH, endM, endS = '00'] = route.hour_end.split(':');

        // Crear fechas de inicio y fin para el día actual
        const startTime = new Date(currentTime);
        startTime.setHours(Number(startH), Number(startM), Number(startS), 0);

        const endTime = new Date(currentTime);
        endTime.setHours(Number(endH), Number(endM), Number(endS), 0);

        // Si el turno cruza medianoche (hora de fin es menor que hora de inicio)
        if (Number(endH) < Number(startH)) {
          // Si la hora actual es mayor o igual a la hora de inicio
          if (currentTime >= startTime) {
            return route.type.toString();
          }
          // Si la hora actual es menor o igual a la hora de fin
          if (currentTime <= endTime) {
            return route.type.toString();
          }
        } else {
          // Turno normal (no cruza medianoche)
          if (currentTime >= startTime && currentTime <= endTime) {
            return route.type.toString();
          }
        }
      }
      
      // No encaja en ningún turno
      return '0';
    } catch (error) {
      this.logger.error(`Error al determinar tráfico nocturno: ${error.message}`);
      return '0';
    }
  }
}
