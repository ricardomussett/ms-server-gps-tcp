import { IGNITION_STATUS } from 'src/app/tcp/application/enums/code.enum'

/**
 * Decodifica el estado de ignición desde un byte
 * @param bytes Byte que contiene el estado de ignición codificado
 * @returns Boolean que indica si la ignición está encendida (true) o apagada (false)
 * - true: ignición encendida (IGNITION_STATUS.ON)
 * - false: ignición apagada
 */
export function decodeIgnition(bytes: number): boolean {
  return bytes === IGNITION_STATUS.ON
}
