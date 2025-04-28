export interface ITcpStatus {
  isRunning: boolean
  port: number | string | null
  connectedClients: number
}
