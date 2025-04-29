import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/core/prisma/service/prisma.service'

@Injectable()
export class CommonRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getStatus(): Promise<any> {
    return await this.prisma.$queryRaw`SELECT 1`
  }
}
