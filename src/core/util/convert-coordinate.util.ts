/**
 * Convierte un arreglo de cadenas BCD de longitud a grados decimales.
 *
 * Proceso:
 *  1. Normaliza cada elemento a 2 dígitos.
 *  2. Une todos los valores en una sola cadena BCD.
 *  3. Separa los primeros 3 dígitos (grados y signo) y el resto (minutos y decimales).
 *  4. Calcula el valor absoluto de los grados y la fracción de minutos.
 *  5. Determina el signo (Este/Oeste) y redondea a 5 decimales.
 *
 * @param {string[]} array – Arreglo de cadenas de 2 dígitos que representan bytes BCD.
 * @returns {number} Coordenada en grados decimales (positivo para Este, negativo para Oeste).
 */
export function convertCoordinade(array) {
    // Asegura que cada elemento tenga 2 caracteres, agregando '0' al inicio si falta
    array = array.map((num) => (num.length < 2 ? '0' + num : num));
    // Une los elementos en una cadena continua de dígitos BCD
    const data = array.join('');
    // Separa los primeros 3 dígitos (grupo de grados + posible indicador) del resto (minutos y decimales)
    let group1 = data.slice(0, 3);
    let group2 = data.slice(3);
    // Determina el signo: si el primer dígito de group1 es 0 => Oeste(-), si >=1 => Este(+)
    const sign = group1[0] >= 1 ? 1 : -1;
    // Elimina el dígito de signo para obtener el valor absoluto de los grados
    group1 = group1.slice(1);
  
    // Convierte los dos primeros dígitos restantes en minutos y concatena el punto con decimales
    // Divide por 60 para obtener la fracción de grado
    group2 = parseFloat(group2.slice(0, 2) + '.' + group2.slice(2)) / 60;
    // Suma la parte entera de grados con la fracción de minutos
    let result = -(parseFloat(group1) + group2);
  
    // Aplica el signo final (Este/Oeste)
    result *= sign;
  
    // Redondea a 5 decimales
    result = parseFloat(result.toFixed(5));
  
    return result;
  }