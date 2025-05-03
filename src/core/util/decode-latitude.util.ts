import { convertCoordinade } from "./convert-coordinate.util";

/**
 * Decodifica la latitud desde un buffer BCD de 4 bytes a grados decimales.
 *
 * Formato de bytes (BCD):
 *  - byte 0: bit 7 indica Norte(0) / Sur(1), bits 6-4 decenas de grados, bits 3-0 unidades de grados
 *  - byte 1: bits 7-4 decenas de minutos, bits 3-0 unidades de minutos
 *  - byte 2: bits 7-4 primer decimal de minutos, bits 3-0 segundo decimal de minutos
 *  - byte 3: bits 7-4 tercer decimal de minutos, bits 3-0 cuarto decimal de minutos
 *
 * @param {Buffer} bytes Buffer de 4 bytes con la latitud codificada en BCD
 * @returns {number} Latitud en grados decimales (positivo para Norte, negativo para Sur)
 * @throws {Error} Si el buffer no contiene exactamente 4 bytes
 */
export function decodeLatitude(bytes: Buffer): number {

  // Validar que el buffer tenga exactamente 4 bytes
  if (bytes.length !== 4) {
    throw new Error('Se esperaban 4 bytes para latitud');
  }

  // Convertir cada byte a cadena hexadecimal BCD de dos dígitos
  let array = [
    bytes.readUInt8(0).toString(16).length == 2
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
  ];

  // Calcular la latitud en grados decimales a partir del arreglo BCD
  const latitud = convertCoordinade(array);

  // Mostrar el resultado de la latitud (para depuración)
  console.log('latitud', latitud);

  // Devolver la latitud calculada
  return latitud;
}