/**
 * Decodifica la resistencia del sensor de aceite desde un buffer de 2 bytes
 * @param bytes Buffer de 2 bytes que contiene la resistencia codificada
 * - byte 0: byte más significativo (MSB)
 * - byte 1: byte menos significativo (LSB)
 * @returns Número que representa la resistencia del sensor de aceite en ohmios
 */
export function decodeOilResistance(bytes: Buffer): number {
  // Combina los 2 bytes usando operaciones bit a bit
  const oilResistance = (bytes[0] << 8) | bytes[1]
  return oilResistance
}
