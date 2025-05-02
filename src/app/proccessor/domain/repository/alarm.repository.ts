import { Injectable } from '@nestjs/common'
import { Prisma } from 'generated/prisma'
import { PrismaService } from 'src/core/prisma/service/prisma.service'

@Injectable()
export class AlarmRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findLimitSpeed(params: { where: Prisma.limitSpeedWhereInput; select: Prisma.limitSpeedSelect }) {
    return await this.prisma.limitSpeed.findMany({
      where: params.where,
      select: params.select,
    })
  }

  async findShiftRoute(params: { where: Prisma.shiftRouteWhereInput; select: Prisma.shiftRouteSelect }) {
    return await this.prisma.shiftRoute.findMany({
      where: params.where,
      select: params.select,
    })
  }
}
