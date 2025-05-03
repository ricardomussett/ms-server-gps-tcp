export function decodeLatitude(bytes: Buffer): number {

  console.log(bytes)

  if (bytes.length !== 4) {
    throw new Error('Se esperaban 4 bytes para latitud');
  }

  let array = [bytes.readUInt8(0).toString(16).length == 2
    ? bytes.readUInt8(0).toString(16)
    : bytes.readUInt8(0).toString(16).padStart(2, '0'),
  bytes.readUInt8(1).toString(16).length == 2
    ? bytes.readUInt8(1).toString(16)
    : bytes.readUInt8(1).toString(16).padStart(2, '0'),
  bytes.readUInt8(2).toString(16).length == 2
    ? bytes.readUInt8(2).toString(16)
    : bytes.readUInt8(2).toString(16).padStart(2, '0'),
  bytes.readUInt8(3).toString(16).length == 2
    ? bytes.readUInt8(3).toString(16)
    : bytes.readUInt8(3).toString(16).padStart(2, '0'),
  ]

  const latitud =  convertCoordinade(array)

  console.log('latitud', latitud)

  return latitud;
}

export function convertCoordinade(array) {
  array = array.map((num) => (num.length < 2 ? '0' + num : num));
  const data = array.join('');
  let group1 = data.slice(0, 3);
  let group2 = data.slice(3);
  // Separar el primer número del primer grupo
  const sign = group1[0] >= 1 ? 1 : -1;
  group1 = group1.slice(1);

  // Formatear el segundo grupo y dividirlo entre 60
  group2 = parseFloat(group2.slice(0, 2) + '.' + group2.slice(2)) / 60;
  // Sumar el primer grupo y el resultado de la operación anterior
  let result = -(parseFloat(group1) + group2);

  // Calcular si el resultado será positivo o negativo
  result *= sign;

  result = parseFloat(result.toFixed(5));

  return result;
}