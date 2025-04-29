import { parseDms } from 'dms-conversion'

/**
 * Decodifica la longitud desde un buffer de 4 bytes en formato BCD
 * @param bytes Buffer de 4 bytes que contiene la longitud codificada
 * - byte 0: bit 7 indica Este(0)/Oeste(1), bits 6-4 centenas, bits 3-0 decenas de grados
 * - byte 1: bits 7-4 unidades de grados, bits 3-0 decenas de minutos
 * - byte 2: bits 7-4 unidades minutos, bits 3-0 primer decimal minutos
 * - byte 3: bits 7-4 segundo decimal minutos, bits 3-0 tercer decimal minutos
 * @example
 * Input: [0x13, 0x04, 0x56, 0x08] (13H，04H，56H，08H)
 * Cálculo:
 * - Signo: 0x13 & 0x80 = 0 -> Este
 * - Grados: ((0x13 & 0x70) >> 4) * 100 + (0x13 & 0x0F) * 10 + ((0x04 & 0xF0) >> 4) = 130°
 * - Minutos: (0x04 & 0x0F) * 10 + ((0x56 & 0xF0) >> 4) = 45'
 * - Decimales: (0x56 & 0x0F)/10 + ((0x08 & 0xF0) >> 4)/100 + (0x08 & 0x0F)/1000 = 0.608'
 * Output: 130°45.608'E -> 130.76013333333334
 * @returns {number} Longitud en grados decimales
 */
export function decodeLongitude(bytes: Buffer): number {
  if (bytes.length !== 4) throw new Error('Se requieren 4 bytes')

  // Signo (bit 7 del primer byte)
  const isEast = (bytes[0] & 0x80) === 0x00

  // Grados: primeros 3 dígitos (BCD)
  const degrees =
    ((bytes[0] & 0x70) >> 4) * 100 + // centenas (1 en 13H)
    (bytes[0] & 0x0f) * 10 + // decenas (3 en 13H)
    ((bytes[1] & 0xf0) >> 4) // unidades (0 en 04H)

  // Minutos: parte entera + decimal
  const minutes =
    (bytes[1] & 0x0f) * 10 + // min enteros (4 en 04H → 40)
    ((bytes[2] & 0xf0) >> 4) + // min enteros (5 en 56H → +5 = 45)
    (bytes[2] & 0x0f) / 10 + // decimal (6 en 56H → 0.6)
    ((bytes[3] & 0xf0) >> 4) / 100 + // decimal (0 en 08H → 0.00)
    (bytes[3] & 0x0f) / 1000 // decimal (8 en 08H → 0.008)

  // Convertir a grados decimales
  const dmsString = `${degrees}°${minutes.toFixed(3)}'${isEast ? 'E' : 'W'}`
  const decimalDegrees = parseDms(dmsString)

  return decimalDegrees
}
