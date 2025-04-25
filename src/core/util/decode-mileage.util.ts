/**
 * Decodifica el kilometraje desde un buffer de 4 bytes
 * @param bytes Buffer de 4 bytes que contiene el kilometraje codificado
 * - byte 0: bits más significativos (MSB)
 * - byte 1: segundo byte más significativo
 * - byte 2: tercer byte más significativo
 * - byte 3: bits menos significativos (LSB)
 * @returns Número que representa el kilometraje total en metros
 */
export function decodeMileage(bytes: Buffer): number {
  // Combina los 4 bytes usando operaciones bit a bit
  // Desplaza cada byte a su posición correspondiente y los combina con OR
  const mileage =
    (bytes[0] << 24) | // Byte más significativo
    (bytes[1] << 16) | // Segundo byte
    (bytes[2] << 8) | // Tercer byte
    bytes[3] // Byte menos significativo
  return mileage
}
