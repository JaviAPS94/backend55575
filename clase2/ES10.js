const cadena1 = `     hola`;
const cadena2 = cadena1.trim();

console.log(cadena1.length);
console.log(cadena2);
console.log(cadena2.length);

const arregloAnidado = [[1,2],[3,4],[5,6,[7,8,[6,7]]]];

const arregloProcesado = arregloAnidado.flat(3);

console.log(arregloProcesado);

//NULLISH OPERATOR
const prueba = 0;

const variablePorDefecto = prueba || 'Sin valor';
const nullish = prueba ?? 'Sin valor';

console.log(variablePorDefecto);
console.log(nullish);