export interface PacketInfo {
  clientId: string
  packetType: number
  length: number
  payload: Buffer
  checksum: number
  footer: number
}
