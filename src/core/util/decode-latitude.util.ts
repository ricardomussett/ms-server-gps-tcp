import { parseDms } from 'dms-conversion'

/**
 * Decodifica la latitud desde un buffer de 4 bytes en formato BCD
 * @param bytes Buffer de 4 bytes que contiene la latitud codificada
 * - byte 0: bit 7 indica Norte(0)/Sur(1), bits 6-4 decenas, bits 3-0 unidades de grados
 * - byte 1: bits 7-4 decenas minutos, bits 3-0 unidades minutos
 * - byte 2: bits 7-4 primer decimal minutos, bits 3-0 segundo decimal minutos
 * - byte 3: bits 7-4 tercer decimal minutos, bits 3-0 no usado
 * @example
 * Input: [0x23, 0x45, 0x67, 0x80] (23H，45H，67H，80H)
 * Cálculo:
 * - Signo: 0x23 & 0x80 = 0 -> Norte
 * - Grados: ((0x23 & 0x70) >> 4) + (0x23 & 0x0F)*10 = 23°
 * - Minutos enteros: ((0x45 & 0xF0) >> 4) * 10 + (0x45 & 0x0F) = 45'
 * - Decimales: ((0x67 & 0xF0) >> 4) * 100 + (0x67 & 0x0F) * 10 + ((0x80 & 0xF0) >> 4) = 0.678'
 * Output: 23°45.678'N -> 23.76130
 * @returns {number} Latitud en grados decimales
 * @throws {Error} Si el buffer no tiene 4 bytes
 */
export function decodeLatitude(bytes: Buffer): number {
  if (bytes.length !== 4) {
    throw new Error('Se esperaban 4 bytes para latitud')
  }

  // Extraer signo (bit más significativo del primer byte)
  const isNorth = (bytes[0] & 0x80) === 0x00

  // Decodificar grados (BCD) - primer byte sin el bit de signo
  const degrees = ((bytes[0] & 0x70) >> 4) + (bytes[0] & 0x0f) * 10

  // Decodificar minutos enteros en formato BCD
  const minutesInt = ((bytes[1] & 0xf0) >> 4) * 10 + (bytes[1] & 0x0f)

  // Decodificar parte decimal de los minutos (3 dígitos)
  const minutesDecimal =
    (((bytes[2] & 0xf0) >> 4) * 100 + // primer dígito decimal
      (bytes[2] & 0x0f) * 10 + // segundo dígito decimal
      ((bytes[3] & 0xf0) >> 4)) / // tercer dígito decimal
    1000

  // Multiplicar por 10 para convertir a grados decimales
  const minutes = 10 * (minutesInt + minutesDecimal)

  // Convertir a formato DMS y luego a grados decimales
  const dmsString = `${degrees}°${minutes.toFixed(3)}'${isNorth ? 'N' : 'S'}`
  const decimalDegrees = parseDms(dmsString)

  return decimalDegrees
}
