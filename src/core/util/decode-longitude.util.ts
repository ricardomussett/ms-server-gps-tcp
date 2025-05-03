import { convertCoordinate } from './decode-latitude.util'

/**
 * Decodifica la longitud desde un buffer BCD de 4 bytes a grados decimales.
 *
 * Formato de bytes (BCD):
 *  - byte 0: bit 7 indica Este(0) / Oeste(1), bits 6-4 centenas de grados, bits 3-0 decenas de grados
 *  - byte 1: bits 7-4 unidades de grados, bits 3-0 decenas de minutos
 *  - byte 2: bits 7-4 unidades de minutos, bits 3-0 primer decimal de minutos
 *  - byte 3: bits 7-4 segundo decimal de minutos, bits 3-0 tercer decimal de minutos
 *
 * @param bytes Buffer de 4 bytes con la longitud codificada en BCD
 * @returns {number} Longitud en grados decimales (positivo para Este, negativo para Oeste)
 * @throws {Error} Si el buffer no contiene exactamente 4 bytes
 */
export function decodeLongitude(bytes: Buffer): number {
  // Validar que el buffer contenga exactamente 4 bytes
  if (bytes.length !== 4) throw new Error('Se requieren 4 bytes')

  // Convertir cada byte a su representación BCD en hexadecimal de dos dígitos
  let array = [bytes.readUInt8(0).toString(16).length == 2
    ? bytes.readUInt8(0).toString(16)
    : bytes.readUInt8(0).toString(16).padStart(2, '0'),
  bytes.readUInt8(1).toString(16).length == 2
    ? bytes.readUInt8(1).toString(16)
    : bytes.readUInt8(1).toString(16).padStart(2, '0'),
  bytes.readUInt8(2).toString(16).length == 2
    ? bytes.readUInt8(2).toString(16)
    : bytes.readUInt8(2).toString(16).padStart(2, '0'),
  bytes.readUInt8(3).toString(16).length == 2
    ? bytes.readUInt8(3).toString(16)
    : bytes.readUInt8(3).toString(16).padStart(2, '0'),
  ]

  // Calcular la longitud en grados decimales a partir del arreglo BCD
  const longitude = convertCoordinate(array)

  // Mostrar el resultado en consola (para depuración)
  console.log('longitude', longitude)

  // Retornar la longitud calculada
  return longitude;
}


