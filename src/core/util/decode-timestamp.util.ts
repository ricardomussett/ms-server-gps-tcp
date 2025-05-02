import { ConsoleLogger } from '@nestjs/common';
import { DateTime } from 'luxon';

/**
 * Decodifica un timestamp desde un buffer de 6 bytes
 * @param bytes Buffer de 6 bytes que contiene la fecha y hora codificada
 * - byte 0: año (2 dígitos, offset 2000)
 * - byte 1: mes (1-12)
 * - byte 2: día (1-31)
 * - byte 3: hora (0-23)
 * - byte 4: minutos (0-59)
 * - byte 5: segundos (0-59)
 * @returns Objeto Date con la fecha y hora decodificada
 */
export function decodeTimestamp(bytes: Buffer): Date {
  // Extrae cada componente de fecha/hora usando operaciones bit a bit
  const dateTime = {
    year: 2000 + (bytes[0] >> 4) * 10 + (bytes[0] & 0x0f), // Suma 2000 al año de 2 dígitos
    month: (bytes[1] >> 4) * 10 + (bytes[1] & 0x0f), // Extrae mes
    day: (bytes[2] >> 4) * 10 + (bytes[2] & 0x0f), // Extrae día
    hour: (bytes[3] >> 4) * 10 + (bytes[3] & 0x0f), // Extrae hora
    minute: (bytes[4] >> 4) * 10 + (bytes[4] & 0x0f), // Extrae minutos
    second: (bytes[5] >> 4) * 10 + (bytes[5] & 0x0f), // Extrae segundos
  }

  const dt = DateTime.fromObject(
    {
      year: dateTime.year,
      month: dateTime.month,
      day: dateTime.day,
      hour: dateTime.hour,
      minute: dateTime.minute,
      second: dateTime.second,
    },
    { zone: 'America/Caracas' } // ← ¡Aquí va la zona horaria!
  );

  const dtCaracas = dt.toUTC()

  const timestamp = dtCaracas.toJSDate(); // Convertir a Date de JavaScript

  return timestamp
}
