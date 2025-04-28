import { ITcpStatus } from '../../../../core/interface/tcp-status.interface'

export interface IStatus {
  status: string
  database: string
  redis: string
  tcpStatus: ITcpStatus | null
  error: any
}
