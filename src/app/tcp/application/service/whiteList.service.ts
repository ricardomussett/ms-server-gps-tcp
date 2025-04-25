import { Injectable, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PrismaService } from 'src/core/prisma/service/prisma.service'

@Injectable()
export class WhitelistService {
  private whitelist: string[] = []
  private readonly logger = new Logger(WhitelistService.name)
  private readonly REFRESH_INTERVAL: number

  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {
    this.REFRESH_INTERVAL = this.configService.get<number>('WHITELIST_REFRESH_INTERVAL') || 180000
    this.refreshWhitelist().catch((error) => {
      this.logger.error(`Error refrescando la whitelist: ${error.message}`)
    })
    this.setupRefreshInterval()
  }

  private setupRefreshInterval() {
    setInterval(() => {
      this.refreshWhitelist().catch((error) => {
        this.logger.error(`Error refrescando la whitelist: ${error.message}`)
      })
    }, this.REFRESH_INTERVAL)
  }

  private async refreshWhitelist() {
    try {
      const activeIPs = await this.prisma.whiteListPseudoIP.findMany({
        where: {
          isActive: true,
        },
        select: {
          PseudoIP: true,
        },
      })

      this.whitelist = activeIPs.map((ip) => ip.PseudoIP)
      this.logger.log(`Lista blanca actualizada. Total de IPs activas: ${this.whitelist.length}`)
    } catch (error) {
      this.logger.error(`Error al actualizar la lista blanca: ${error.message}`)
    }
  }

  isClientAllowed(clientId: string): boolean {
    return this.whitelist.includes(clientId)
  }
}
