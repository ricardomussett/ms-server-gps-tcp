/**
 * Decodifica la temperatura desde un byte
 * @param bytes Byte que contiene la temperatura codificada
 * - Si el byte es 0x01, la temperatura es negativa
 * - En otro caso, la temperatura es positiva
 * @returns Número que representa la temperatura en grados Celsius
 */
export function decodeTemperature(bytes: number): number {
  // Determina el signo de la temperatura
  const tempSign = bytes === 0x01 ? -1 : 1
  // Multiplica el valor por el signo para obtener la temperatura final
  return tempSign * bytes
}
