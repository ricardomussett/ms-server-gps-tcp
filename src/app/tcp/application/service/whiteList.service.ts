import { Injectable, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { WhitelistRepository } from '../../domain/repository/whitelist.repository'

@Injectable()
export class WhitelistService {
  private whitelist: string[] = []
  private readonly logger = new Logger(WhitelistService.name)

  constructor(
    private readonly whitelistRepository: WhitelistRepository,
    private readonly configService: ConfigService,
  ) {
    this.refreshWhitelist().catch((error) => {
      this.logger.error(`Error refrescando la whitelist: ${error.message}`)
    })
    this.setupRefreshInterval()
  }

  private setupRefreshInterval() {
    setInterval(
      () => {
        this.refreshWhitelist().catch((error) => {
          this.logger.error(`Error refrescando la whitelist: ${error.message}`)
        })
      },
      this.configService.get<number>('WHITELIST_REFRESH_INTERVAL') || 180000,
    )
  }

  private async refreshWhitelist() {
    try {
      const activeIPs = await this.whitelistRepository.listWhiteListPseudoIP({
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
