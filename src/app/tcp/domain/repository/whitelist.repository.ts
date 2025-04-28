import { Injectable } from '@nestjs/common'
import { Prisma, WhiteListPseudoIP } from 'generated/prisma'
import { PrismaService } from 'src/core/prisma/service/prisma.service'

@Injectable()
export class WhitelistRepository {
  constructor(private readonly prisma: PrismaService) {}

  async listWhiteListPseudoIP(params: {
    where: Prisma.WhiteListPseudoIPWhereInput
    select: Prisma.WhiteListPseudoIPSelect
  }): Promise<WhiteListPseudoIP[]> {
    return await this.prisma.whiteListPseudoIP.findMany({
      where: params.where,
      select: params.select,
    })
  }
}
