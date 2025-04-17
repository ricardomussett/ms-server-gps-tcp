import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class WhitelistService {
  private whitelist: string[] = [];
  private readonly logger = new Logger(WhitelistService.name);
  private readonly REFRESH_INTERVAL = 180000; // 3 minutos en ms

  constructor(
    private readonly prisma: PrismaService
  ) {
    this.refreshWhitelist();
    this.setupRefreshInterval();
  }

  private setupRefreshInterval() {
    setInterval(() => {
      this.refreshWhitelist();
    }, this.REFRESH_INTERVAL);
  }

  private async refreshWhitelist() {
    try {
      const activeIPs = await this.prisma.whiteListPseudoIP.findMany({
        where: {
          isActive: true
        },
        select: {
          PseudoIP: true
        }
      });

      this.whitelist = activeIPs.map(ip => ip.PseudoIP);
      this.logger.log(`Lista blanca actualizada. Total de IPs activas: ${this.whitelist.length}`);
    } catch (error) {
      this.logger.error(`Error al actualizar la lista blanca: ${error.message}`);
    }
  }

  isClientAllowed(clientId: string): boolean {
    return this.whitelist.includes(clientId);
  }
}