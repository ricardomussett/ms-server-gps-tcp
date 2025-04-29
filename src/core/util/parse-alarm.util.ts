import { ALARM_STATUS } from 'src/app/tcp/application/enums/code.enum'
import { parsePositionData } from './parse-position.util'

/**
 * Parsea los datos de alarma del paquete GPS
 * @param buffer Buffer que contiene los datos crudos del paquete
 * @param result Objeto donde se almacenarán los datos parseados
 *
 * El método procesa:
 * 1. Los datos de posición usando parsePositionData()
 * 2. Los bytes de alarma que contienen diferentes estados:
 *
 * Primer byte de alarma (byte 36):
 * - oilChange: Alarma de cambio de aceite
 * - crossBorder: Cruce de frontera
 * - overVoltage: Sobrevoltaje
 * - underVoltage: Bajo voltaje
 * - overload: Sobrecarga
 * - overtimeDriving: Exceso de tiempo de conducción
 * - enterBorder: Entrada en frontera
 *
 * Segundo byte de alarma (byte 37):
 * - illegalDoorOpen: Apertura ilegal de puerta
 * - illegalStart: Arranque ilegal
 * - vibration: Vibración detectada
 * - centerEnabledAlarm: Alarma habilitada desde central
 * - powerFailure: Fallo de energía
 * - parking: Estacionamiento
 * - overSpeed: Exceso de velocidad
 * - emergency: Emergencia
 */
export function parseAlarmData(buffer: Buffer, result: any) {
  // Primero parsear datos de posición (igual que comando 80)
  parsePositionData(buffer, result)

  // Luego parsear datos de alarma (2 bytes después de datos de posición)
  const alarmByte1 = buffer[36]
  const alarmByte2 = buffer[37]

  result.alarms = {
    oilChange: !!(alarmByte1 & ALARM_STATUS.OIL_CHANGE),
    crossBorder: !!(alarmByte1 & ALARM_STATUS.CROSS_BORDER),
    overVoltage: !!(alarmByte1 & ALARM_STATUS.OVER_VOLTAGE),
    underVoltage: !!(alarmByte1 & ALARM_STATUS.UNDER_VOLTAGE),
    overload: !!(alarmByte1 & ALARM_STATUS.OVERLOAD),
    overtimeDriving: !!(alarmByte1 & ALARM_STATUS.OVERTIME_DRIVING),
    enterBorder: !!(alarmByte1 & ALARM_STATUS.ENTER_BORDER),

    illegalDoorOpen: !!(alarmByte2 & ALARM_STATUS.ILLEGAL_DOOR_OPEN),
    illegalStart: !!(alarmByte2 & ALARM_STATUS.ILLEGAL_START),
    vibration: !!(alarmByte2 & ALARM_STATUS.VIBRATION),
    centerEnabledAlarm: !!(alarmByte2 & ALARM_STATUS.CENTER_ENABLED_ALARM),
    powerFailure: !!(alarmByte2 & ALARM_STATUS.POWER_FAILURE),
    parking: !!(alarmByte2 & ALARM_STATUS.PARKING),
    overSpeed: !!(alarmByte2 & ALARM_STATUS.OVER_SPEED),
    emergency: !!(alarmByte2 & ALARM_STATUS.EMERGENCY),
  }
}
