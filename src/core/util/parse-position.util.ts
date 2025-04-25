import { GPS_STATUS } from 'src/app/tcp/application/enums/code.enum'
import { decodeAngle } from './decode-angle.util'
import { decodeLatitude } from './decode-latitude.util'
import { decodeLongitude } from './decode-longitude.util'
import { decodeSpeed } from './decode-speed.util'
import { decodeTimestamp } from './decode-timestamp.util'
import { decodeDigitalInputs } from './decode-digital-inputs.util'
import { decodeIgnition } from './decode-ignition.util'
import { decodeMileage } from './decode-mileage.util'
import { decodeTemperature } from './decode-temperature.util'
import { decodeVoltage } from './decode-voltage.util'
import { decodeOilResistance } from './decolde-oil-resistance.util'
import { parseExtendedData } from './parse-extended.util'

/**
 * Parsea los datos de posición del paquete GPS
 * @param buffer Buffer que contiene los datos crudos del paquete
 * @param result Objeto donde se almacenarán los datos parseados
 *
 * El método procesa:
 * 1. Timestamp (6 bytes): Fecha y hora del registro
 * 2. Latitud (4 bytes): Posición en grados decimales
 * 3. Longitud (4 bytes): Posición en grados decimales
 * 4. Velocidad (2 bytes): En km/h
 * 5. Ángulo (2 bytes): Dirección en grados
 * 6. Estado GPS (1 byte): Ubicación, diferencial y satélites
 * 7. Entradas digitales (1 byte): Estado de entradas
 * 8. Estado de ignición (1 byte)
 * 9. Resistencia de aceite (2 bytes): En ohmios
 * 10. Voltaje (2 bytes): En voltios
 * 11. Kilometraje (4 bytes): En metros
 * 12. Temperatura (2 bytes)
 * 13. Datos extendidos (opcional): Si hay bytes adicionales
 */
export function parsePositionData(buffer: Buffer, result: any) {
  // Los datos de posición comienzan en el byte 9 (después de 24 24 cmd 00 len pseudoIP)
  const posData = buffer.subarray(9, 9 + 35) // 35 bytes de datos de posición

  // Parsea fecha y hora (6 bytes)
  result.timestamp = decodeTimestamp(posData.subarray(0, 6))

  // Parsea latitud (4 bytes)
  result.latitude = decodeLatitude(posData.subarray(6, 10))

  // Parsea longitud (4 bytes)
  result.longitude = decodeLongitude(posData.subarray(10, 14))

  // Parsea velocidad (2 bytes) en km/h
  result.speed = decodeSpeed(posData.subarray(14, 16))

  // Parsea ángulo (2 bytes) en grados
  result.angle = decodeAngle(posData.subarray(16, 18))

  // Estado GPS (1 byte)
  const gpsStatus = posData[18]
  result.gpsStatus = {
    located: !!(gpsStatus & GPS_STATUS.LOCATED), // Ubicación fija
    differential: !!(gpsStatus & GPS_STATUS.DIFFERENTIAL), // GPS diferencial
    satellites: gpsStatus & GPS_STATUS.SATELLITES, // Número de satélites
  }

  // Entradas digitales (1 byte)
  result.digitalInputs = decodeDigitalInputs(posData[19])

  // Estado de ignición (1 byte)
  result.ignition = decodeIgnition(posData[20])

  // Entradas analógicas (4 bytes - 2 para aceite, 2 para voltaje)
  result.oilResistance = decodeOilResistance(posData.subarray(21, 23))
  result.voltage = decodeVoltage(posData.subarray(23, 25))

  // Kilometraje (4 bytes) en metros
  result.mileage = decodeMileage(posData.subarray(25, 29))

  // Temperatura (2 bytes)
  result.temperature = decodeTemperature(posData[29])

  // Datos extendidos si están disponibles
  if (buffer.length > 36) {
    parseExtendedData(buffer.subarray(36), result)
  }
}
