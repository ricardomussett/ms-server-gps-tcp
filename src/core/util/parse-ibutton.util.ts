/**
 * Parsea los datos recibidos del iButton
 * @param buffer Buffer con los datos crudos recibidos
 * @param result Objeto donde se almacenarán los resultados parseados
 *
 * El método procesa diferentes tipos de datos según el subcomando:
 * - 0x06: Modo anti-robo configurado exitosamente
 * - 0x07: Error al configurar modo anti-robo
 * - 0x08: Modo anti-robo cancelado
 * - 0x0A: Configuración de ID de iButton (nombre y código)
 * - 0x0B: Datos de lectura de iButton (estado, fecha/hora, ubicación, conductor)
 *
 * @example
 * Para subcomando 0x0A (configuración):
 * buffer = [..., 0x0A, <nombre,id>, checksum, 0x0D]
 * result = {
 *   driver: {
 *     name: "Juan",
 *     iButtonId: "123456"
 *   }
 * }
 */
export function parseIButtonData(buffer: Buffer, result: Record<string, any>): void {
  // Obtiene el subcomando del primer byte después del header
  const subCommand: number = buffer[9]
  result.subCommand = subCommand

  switch (subCommand) {
    case 0x06: // Anti-theft mode set successfully
    case 0x07: // Anti-theft mode set failed
    case 0x08: // Anti-theft mode cancelled
      result.message = `Anti-theft mode ${
        subCommand === 0x06 ? 'set' : subCommand === 0x07 ? 'set failed' : 'cancelled'
      }`
      break

    case 0x0a: {
      // iButton ID setting
      const content: string = buffer.slice(10, buffer.length - 2).toString('ascii')
      const matches: RegExpMatchArray | null = content.match(/<([^,]+),([^>]+)>/)
      if (matches) {
        result.driver = {
          name: matches[1],
          iButtonId: matches[2],
        }
      }
      break
    }

    case 0x0b: {
      // iButton swiping data
      const status: number = buffer[10]
      const dateTime: {
        year: number
        month: number
        day: number
        hour: number
        minute: number
        second: number
      } = {
        year: 2000 + buffer[11],
        month: buffer[12],
        day: buffer[13],
        hour: buffer[14],
        minute: buffer[15],
        second: buffer[16],
      }

      // Parse coordinates (same as position data)
      const latSign: number = buffer[17] & 0x80 ? -1 : 1
      const latDegrees: number = buffer[17] & 0x7f
      const latMinutes: number = buffer[18] + buffer[19] / 1000

      const lonSign: number = buffer[20] & 0x80 ? -1 : 1
      const lonDegrees: number = buffer[20] & 0x7f
      const lonMinutes: number = buffer[21] + buffer[22] / 1000

      // Parse driver info
      const driverInfo: string = buffer.slice(23, buffer.length - 2).toString('ascii')
      const driverMatch: RegExpMatchArray | null = driverInfo.match(/<([^,]+),([^>]+)>/)

      result.swipeData = {
        status,
        dateTime: new Date(
          dateTime.year,
          dateTime.month - 1,
          dateTime.day,
          dateTime.hour,
          dateTime.minute,
          dateTime.second,
        ),
        latitude: latSign * (latDegrees + latMinutes / 60),
        longitude: lonSign * (lonDegrees + lonMinutes / 60),
        located: !!(buffer[23] & 0x80),
      }

      if (driverMatch) {
        result.swipeData.driver = {
          name: driverMatch[1],
          iButtonId: driverMatch[2],
        }
      }
      break
    }

    default:
      result.message = 'Unknown iButton sub-command'
      break
  }
}
