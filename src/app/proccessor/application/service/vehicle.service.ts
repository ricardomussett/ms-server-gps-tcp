import { Injectable, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Vehicle } from '../../domain/interface/proccessor.interface'
import { PrismaService } from 'src/core/prisma/service/prisma.service'

@Injectable()
export class VehiclelistService {
  private vehiclelist: Vehicle[] = []
  private readonly logger = new Logger(VehiclelistService.name)
  private readonly REFRESH_INTERVAL: number

  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {
    this.REFRESH_INTERVAL = this.configService.get<number>('VEHICLE_REFRESH_INTERVAL') || 180000
    this.refreshVehiclelist()
    this.setupRefreshInterval()
  }

  private setupRefreshInterval() {
    setInterval(() => {
      this.refreshVehiclelist()
    }, this.REFRESH_INTERVAL)
  }

  private async refreshVehiclelist() {
    try {
      const activeVehicle = await this.prisma.vehicle.findMany({
        where: {
          isActive: true,
        },
        select: {
          id: true,
          plate: true,
          model: true,
          pseudoIP: true,
          driverName: true,
        },
      })

      this.vehiclelist = activeVehicle
      this.logger.log(`Lista blanca actualizada. Total de Vehiculos: ${this.vehiclelist.length}`)
    } catch (error) {
      this.logger.error(`Error al actualizar la lista blanca: ${error.message}`)
    }
  }

  findVehicle(pseudoIP: string): Vehicle | undefined {
    return this.vehiclelist.find((vehicle) => vehicle.pseudoIP === pseudoIP)
  }
}
