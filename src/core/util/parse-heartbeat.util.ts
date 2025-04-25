/**
 * Parsea los datos del paquete de heartbeat (latido) del dispositivo GPS
 * @param buffer Buffer que contiene los datos crudos del paquete
 * @param result Objeto donde se almacenarán los datos parseados
 *
 * El método extrae:
 * - message: Mensaje de confirmación de recepción del heartbeat
 * - calibrationValue: Valor de calibración del dispositivo (byte 5)
 * - mainOrderReply: Respuesta de la orden principal (byte 6)
 * - slaveOrderReply: Respuesta de la orden secundaria (byte 7)
 */
export function parseHeartbeatData(buffer: Buffer, result: any) {
  // Simple heartbeat - just acknowledge
  result.message = 'Heartbeat received'
  result.calibrationValue = buffer[5]
  result.mainOrderReply = buffer[6]
  result.slaveOrderReply = buffer[7]
}
