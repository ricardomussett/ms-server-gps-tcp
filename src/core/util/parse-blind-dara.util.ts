import { BLIND_ALARM_STATUS } from "src/app/tcp/application/enums/code.enum";
import { parsePositionData } from "./parse-position.util";

/**
 * Parsea los datos del paquete de alarmas ciegas (blind data) del GPS
 * @param buffer Buffer que contiene los datos crudos del paquete
 * @param result Objeto donde se almacenarán los datos parseados
 * 
 * El método procesa:
 * 1. Los datos de posición usando parsePositionData()
 * 2. El byte de alarma (byte 42) que contiene diferentes estados:
 * 
 * Byte de alarma:
 * - harshAcceleration: Aceleración brusca (0x01)
 * - harshBraking: Frenado brusco (0x02) 
 * - harshCornering: Giro brusco (0x04)
 * - crashing: Colisión (0x10)
 * - rollover: Volcadura (0x20)
 * - towedAway: Remolque no autorizado (0x40)
 * - sos: Botón SOS activado (0x80)
 * 
 * 3. Datos extendidos opcionales después del byte 42
 */
export function parseBlindData(buffer: Buffer, result: any) {
    // Parsear datos de posición (similar al comando 0x80)
    parsePositionData(buffer, result);
  
    // Obtener el byte de alarma (posición 42 del paquete completo)
    const alarmByte = buffer[41]; // Índice 41 (0-based) = byte 42 del protocolo
  
    // Decodificar las alarmas
    result.blindAlarms = {
      harshAcceleration: !!(alarmByte & BLIND_ALARM_STATUS.HARSH_ACCELERATION),
      harshBraking: !!(alarmByte & BLIND_ALARM_STATUS.HARSH_BRAKING),
      harshCornering: !!(alarmByte & BLIND_ALARM_STATUS.HARSH_CORNERING),
      crashing: !!(alarmByte & BLIND_ALARM_STATUS.CRASHING),
      rollover: !!(alarmByte & BLIND_ALARM_STATUS.ROLLOVER),
      towedAway: !!(alarmByte & BLIND_ALARM_STATUS.TOWED_AWAY),
      sos: !!(alarmByte & BLIND_ALARM_STATUS.SOS),
    };
  
    // Si hay datos extendidos (opcional)
    if (buffer.length > 42) {
      this.parseExtendedData(buffer.subarray(42), result);
    }
  }