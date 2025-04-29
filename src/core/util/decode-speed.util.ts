/**
 * Decodifica la velocidad desde un buffer de 2 bytes en formato BCD
 * @param bytes Buffer de 2 bytes que contiene la velocidad codificada
 * - byte 0: nibble superior representa miles, nibble inferior centenas
 * - byte 1: nibble superior representa decenas, nibble inferior unidades
 * @example
 * Input: [0x01, 0x20] (01H，20H)
 * Cálculo:
 * - (0x01 >> 4) * 1000 = 0 * 1000 = 0
 * - (0x01 & 0x0F) * 100 = 1 * 100 = 100
 * - (0x20 >> 4) * 10 = 2 * 10 = 20
 * - (0x20 & 0x0F) = 0
 * Output: 120 (km/h)
 * @returns {number} Velocidad en km/h
 */
export function decodeSpeed(bytes: Buffer): number {
  const speed =
    (bytes[0] >> 4) * 1000 + // Nibble superior del primer byte * 1000
    (bytes[0] & 0x0f) * 100 + // Nibble inferior del primer byte * 100
    (bytes[1] >> 4) * 10 + // Nibble superior del segundo byte * 10
    (bytes[1] & 0x0f) // Nibble inferior del segundo byte

  return speed
}
