import { PacketInfo } from 'src/app/tcp/domain/interface/packet-info.interface'
import { COMMAND_CODES } from '../enums/code.enums'
import { pseudoIpToSim } from './convert-pseudoIp-to-sim.util'
import { parseAlarmData } from './parse-alarm.util'
import { parseHeartbeatData } from './parse-heartbeat.util'
import { parseIButtonData } from './parse-ibutton.util'
import { parsePositionData } from './parse-position.util'
import { parseReplyToLocate } from './parse-reply-to-locate.util'
import { parseTrackerStatus } from './parse-tracker-status.util'
import { parseBlindData } from './parse-blind-dara.util'

/**
 * Parsea los datos GPS recibidos del dispositivo
 * @param buffer Buffer con los datos crudos recibidos
 * @param packetInfo Objeto con información del paquete (tipo, longitud, etc)
 * @param clientId Identificador único del cliente
 * @returns Objeto con los datos GPS parseados
 *
 * El método realiza las siguientes operaciones:
 * 1. Convierte los datos crudos a Buffer si es necesario
 * 2. Extrae el comando principal del paquete
 * 3. Extrae información básica del paquete (tipo, longitud, IP, payload, checksum)
 * 4. Inicializa un objeto resultado con la información básica
 * 5. Según el comando principal, delega el parseo a métodos específicos:
 *    - Datos de posición
 *    - Datos de alarma
 *    - Heartbeat
 *    - Respuesta a localización
 *    - Estado del tracker
 *    - Datos de iButton
 */
export function parseGpsData(buffer: Buffer, packetInfo: PacketInfo, clientId: string, decodedPseudoIp: string): any {
  // Convierte datos crudos a Buffer si es string
  const data = buffer

  // Extrae comando principal
  const mainCommand = data[2].toString(16).padStart(2, '0').toUpperCase()

  // Extrae tipo de paquete, longitud, IP pseudo, payload y checksum
  const packetType = packetInfo.packetType
  const packetLength = packetInfo.length
  const pseudoIP = decodedPseudoIp
  const payload = packetInfo.payload
  const checksum = packetInfo.checksum
  const sim = pseudoIpToSim(pseudoIP)

  // Inicializa objeto resultado
  const result: any = {
    clientId,
    mainCommand,
    packetType,
    packetLength,
    pseudoIP,
    sim,
    payload,
    rawData: data.toString('hex'),
    checksum,
  }

  // Procesa según el comando principal
  switch (mainCommand) {
    case COMMAND_CODES.POSITION_DATA: // Datos de posición
      parsePositionData(data, result)
      break

    case COMMAND_CODES.ALARM_DATA: // Datos de alarma
      parseAlarmData(data, result)
      break

    case COMMAND_CODES.HEARTBEAT: // Heartbeat
      parseHeartbeatData(data, result)
      break

    case COMMAND_CODES.REPLY_TO_LOCATE: // Respuesta a localización inmediata
      parseReplyToLocate(data, result)
      break

    case COMMAND_CODES.TRACKER_STATUS: // Parámetros y estado del tracker
      parseTrackerStatus(data, result)
      break

    case COMMAND_CODES.IBUTTON_DATA: // Datos de iButton
      parseIButtonData(data, result)
      break

    case COMMAND_CODES.BLIND_DATA: // Datos de alarma ciega
      parseBlindData(data, result)
      break

    default:
      result.message = 'Tipo de comando desconocido'
      break
  }

  return result
}
