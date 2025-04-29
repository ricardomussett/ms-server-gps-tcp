/**
 * Parsea la temperatura desde un buffer de 2 bytes
 * @param buffer Buffer de 2 bytes que contiene la temperatura codificada
 * - byte 0: signo de la temperatura (0x01 = negativo, otro = positivo)
 * - byte 1: valor absoluto de la temperatura
 * @returns Número que representa la temperatura en grados Celsius
 * @example
 * Input: [0x01, 0x14]
 * Output: -20 (grados Celsius)
 *
 * Input: [0x00, 0x14]
 * Output: 20 (grados Celsius)
 */
export function parseTemperature(buffer: Buffer): number {
  const sign = buffer[0] === 0x01 ? -1 : 1
  return sign * buffer[1]
}
