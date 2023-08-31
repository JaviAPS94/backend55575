//Siempre los nombres de las variables, métodos, funciones deben ser descriptivos
const valoresBase = [1,2,3,4];
                    // 0, 1, 2, 3
// entrada un arregla ----->> un arreglo resultado de la misma longitud aplicando x condicion
const potenciasValoresBase = valoresBase.map((numero, indice) => numero**indice);

console.log(potenciasValoresBase);

// //Single responsability
// //OLID
// function calcularDistancia(latitud, longitud) {
//     //trabjo la suma de dos numeros
// }

//Includes

const nombres = ['Alex', 'Daniel', 'Eleonora'];

if(nombres.includes('David')) // true
{
    console.log('Tenemos el elemento')
} else {
    console.log('No se encuentra el elemento')
}
 //---> resultado un boolean true o false



