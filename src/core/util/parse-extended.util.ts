import { parseTemperature } from './parse-temperature.util'

/**
 * Parsea los datos extendidos del paquete GPS basado en la señal secundaria
 * @param buffer Buffer que contiene los datos extendidos
 * @param result Objeto donde se almacenarán los datos parseados
 *
 * El método procesa diferentes tipos de datos extendidos según el subSignal:
 * - 0x03: Sensores de temperatura 2,3,4 y peso
 *   - temperature2,3,4: Temperaturas de sensores adicionales
 *   - weight: Peso en unidades del dispositivo
 *
 * - 0x06: Temperatura y humedad
 *   - temperature: Objeto con signo, parte entera y decimal
 *   - humidity: Objeto con parte entera y decimal
 *
 * - default: Datos desconocidos, guarda señal y datos crudos
 */
export function parseExtendedData(buffer: Buffer, result: Record<string, any>): void {
  // Obtener señal secundaria del byte 4
  const subSignal: number = buffer[4]

  switch (subSignal) {
    case 0x03: // Sensores de temperatura 2,3,4 y peso
      result.extended = {
        temperature2: parseTemperature(buffer.subarray(5, 7)),
        temperature3: parseTemperature(buffer.subarray(7, 9)),
        temperature4: parseTemperature(buffer.subarray(9, 11)),
        weight: (buffer[11] << 8) | buffer[12], // Combina 2 bytes para el peso
      }
      break

    case 0x06: // Temperatura y humedad
      result.extended = {
        temperature: {
          sign: buffer[6] === 1 ? -1 : 1, // 1 = negativo, otro = positivo
          integer: buffer[7], // Parte entera
          decimal: buffer[8], // Parte decimal
        },
        humidity: {
          integer: buffer[9], // Parte entera
          decimal: buffer[10], // Parte decimal
        },
      }
      break

    default: // Señal desconocida
      result.extended = {
        unknownSignal: subSignal,
        rawData: buffer.toString('hex'),
      }
      break
  }
}
