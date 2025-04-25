import { parsePositionData } from './parse-position.util'

/**
 * Parsea la respuesta a un comando de localización inmediata
 * @param buffer Buffer con los datos crudos recibidos del dispositivo
 * @param result Objeto donde se almacenarán los resultados parseados
 *
 * El método realiza las siguientes operaciones:
 * 1. Procesa los datos de posición usando el mismo formato que el comando 0x80
 * 2. Agrega un mensaje indicando que es una respuesta a localización inmediata
 *
 * La estructura del paquete es idéntica a la de datos de posición regular,
 * por lo que se reutiliza el método parsePositionData()
 */
export function parseReplyToLocate(buffer: Buffer, result: Record<string, any>): void {
  // Mismo formato que datos de posición (comando 0x80)
  parsePositionData(buffer, result)
  result.message = 'Reply to locate immediately command'
}
