import { Injectable } from '@nestjs/common'
import { Prisma } from 'generated/prisma'
import { PrismaService } from 'src/core/prisma/service/prisma.service'

@Injectable()
export class VehicleRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findVehicle(params: { where: Prisma.VehicleWhereInput; select: Prisma.VehicleSelect }) {
    return await this.prisma.vehicle.findMany({
      where: params.where,
      select: params.select,
    })
  }
}
