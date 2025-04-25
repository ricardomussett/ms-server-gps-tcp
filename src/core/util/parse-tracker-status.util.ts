/**
 * Parsea los datos de estado del tracker
 * @param buffer Buffer con los datos crudos recibidos
 * @param result Objeto donde se almacenarán los resultados parseados
 *
 * El método procesa los siguientes datos:
 * - Tiempo de muestreo (samplingTime): año, mes, día, hora, minuto, segundo
 * - Estado de alarma (alarmStatus): valor de 16 bits
 * - Estado de localización (located): true/false
 * - Tipo de muestreo (samplingType): tiempo fijo o distancia fija
 * - Valor de muestreo (samplingValue): intervalo configurado
 * - Tipo de envío (sendingType): envío por punto o silencioso
 * - Configuración de parada (carStopSetting): valor de parada
 * - Configuración de exceso de velocidad (overspeedSetting): límite
 * - Límite de teléfono (phoneLimit): true/false
 * - Límite de nodo de área (areaNodeLimit): true/false
 * - Configuración de seguridad (safeSetting): valor de seguridad
 * - Tiempo de conducción prolongado (longTimeDriving): duración
 * - Valor de muestreo con ACC apagado (samplingValueAccOff): intervalo
 * - Interruptor de alarma de emergencia (emergencyAlarmSwitch): true/false
 * - Relacionado con fotografía (photographRelated): valor de configuración
 */
export function parseTrackerStatus(buffer: Buffer, result: Record<string, any>): void {
  // Extrae los 36 bytes de datos de estado después de los headers
  const statusData: Buffer = buffer.slice(9, 9 + 36)

  result.status = {
    samplingTime: {
      year: 2000 + (statusData[0] >> 4) * 10 + (statusData[0] & 0x0f), // Año base 2000 + valor BCD
      month: (statusData[1] >> 4) * 10 + (statusData[1] & 0x0f), // Mes en formato BCD
      day: (statusData[2] >> 4) * 10 + (statusData[2] & 0x0f), // Día en formato BCD
      hour: (statusData[3] >> 4) * 10 + (statusData[3] & 0x0f), // Hora en formato BCD
      minute: (statusData[4] >> 4) * 10 + (statusData[4] & 0x0f), // Minuto en formato BCD
      second: (statusData[5] >> 4) * 10 + (statusData[5] & 0x0f), // Segundo en formato BCD
    },
    alarmStatus: (statusData[6] << 8) | statusData[7], // Estado de alarma (16 bits)
    located: statusData[8] === 1, // Estado de localización
    samplingType: statusData[9] === 1 ? 'fixed time' : 'fixed distance', // Tipo de muestreo
    samplingValue: (statusData[10] << 8) | statusData[11], // Valor de muestreo (16 bits)
    sendingType: statusData[12] === 1 ? 'point send' : 'silence', // Tipo de envío
    carStopSetting: statusData[13], // Configuración de parada
    overspeedSetting: statusData[14], // Límite de velocidad
    phoneLimit: statusData[15] === 1, // Límite de teléfono
    areaNodeLimit: statusData[16] === 1, // Límite de nodo de área
    safeSetting: statusData[17], // Configuración de seguridad
    longTimeDriving: (statusData[18] << 8) | statusData[19], // Tiempo de conducción (16 bits)
    samplingValueAccOff: (statusData[20] << 8) | statusData[21], // Valor de muestreo ACC off (16 bits)
    emergencyAlarmSwitch: statusData[22] === 1, // Interruptor de alarma
    photographRelated: statusData[23], // Configuración de fotografía
  }
}
