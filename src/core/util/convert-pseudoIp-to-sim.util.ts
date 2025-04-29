/**
 * Convierte una dirección IP pseudo-aleatoria en un número de SIM
 * @param ip String con formato de dirección IP (ej: "192.168.1.1")
 * @returns String con el número de SIM decodificado (11 dígitos)
 *
 * El proceso de decodificación es el siguiente:
 * 1. La IP se divide en 4 bytes
 * 2. De cada byte se extrae el bit más significativo (D7)
 * 3. Los 4 bits D7 forman un valor base (iHigt) que se suma a 30
 * 4. Se eliminan los bits D7 de cada byte
 * 5. Se forma el número concatenando:
 *    - "1" (primer dígito fijo)
 *    - Valor base + 30 (2 dígitos)
 *    - Los 4 bytes sin D7 (2 dígitos cada uno)
 */
export function pseudoIpToSim(ip: string): string {
  // Dividir la IP en sus 4 componentes
  const ipParts = ip.split('.').map((part) => parseInt(part, 10))

  // Verificar formato válido
  if (ipParts.length !== 4 || ipParts.some(isNaN)) {
    throw new Error('Formato de IP pseudo inválido')
  }

  // Extraer bits superiores (D7) de cada byte
  const bits = ipParts.map((part) => ((part & 0x80) !== 0 ? 1 : 0))

  // Calcular iHigt (valor base)
  const iHigt = (bits[0] << 3) | (bits[1] << 2) | (bits[2] << 1) | bits[3]

  // Eliminar bit D7 de cada byte
  const cleanParts = ipParts.map((part) => part & 0x7f)

  // Reconstruir grupos del SIM
  const grupoBase = 30 + iHigt
  const grupos = [
    grupoBase.toString().padStart(2, '0'),
    cleanParts[0].toString().padStart(2, '0'),
    cleanParts[1].toString().padStart(2, '0'),
    cleanParts[2].toString().padStart(2, '0'),
    cleanParts[3].toString().padStart(2, '0'),
  ]

  // Formar número de SIM
  return `1${grupos.join('')}`
}
