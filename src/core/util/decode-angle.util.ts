/**
 * Decodifica el ángulo de dirección desde un buffer de 2 bytes
 * @param bytes Buffer de 2 bytes que contiene el ángulo codificado en BCD
 * - byte 0: byte completo representa las centenas (01H = 100)
 * - byte 1: nibble superior representa decenas, nibble inferior unidades (54H = 54)
 * @example
 * Input: [0x01, 0x54] (01H，54H)
 * Cálculo:
 * - 0x01 & 0xFF = 1 -> 1 * 100 = 100
 * - (0x54 & 0xF0) >> 4 = 5 -> 5 * 10 = 50
 * - 0x54 & 0x0F = 4
 * Output: 154 (grados)
 * @returns {number} Ángulo en grados (0-359)
 */
export function decodeAngle(bytes: Buffer): number {

  // Validar que el buffer contenga exactamente 2 bytes
  if (bytes.length !== 2) throw new Error('Se requieren 2 bytes')

  const angle =
    (bytes[0] & 0xff) * 100 + // Toma el byte completo como centenas
    ((bytes[1] & 0xf0) >> 4) * 10 + // Toma el nibble superior como decenas
    (bytes[1] & 0x0f) // Toma el nibble inferior como unidades

  return angle
}
