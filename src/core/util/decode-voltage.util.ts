/**
 * Decodifica el voltaje desde un buffer de 2 bytes
 * @param bytes Buffer de 2 bytes que contiene el voltaje codificado
 * - byte 0: byte más significativo (MSB)
 * - byte 1: byte menos significativo (LSB)
 * El valor resultante se divide por 100 para obtener el voltaje real
 * @returns Número que representa el voltaje en voltios con 2 decimales
 */
export function decodeVoltage(bytes: Buffer): number {
  // Combina los 2 bytes usando operaciones bit a bit y divide por 100
  const voltage = ((bytes[0] << 8) | bytes[1]) / 100
  return voltage
}
