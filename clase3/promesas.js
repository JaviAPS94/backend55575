const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor === 0) {
            reject('No se puede hacer divisiones entre cero');
        } else {
            resolve(dividendo/divisor);
        }
    })
};

// dividir(10, 2)
// //Manejar el caso de éxito de nuestras promesas
//     .then(resultado => {
//         console.log(resultado);
//         return resultado;
//     })
//     .then(resultado2 => {
//         console.log(resultado2 * 3)
//     })
//     //Manejar el caso fallido de nuestras promesas, no importa si tengo llamados encadenados, sirve solamente una vez
//     .catch(error => {
//         console.log(error);
//     })

//Este bloque tiene comportamiento asincrono
const funcionAsincrona = async () => {
    try {
        //await espera el resultado de la promesa
       const resultado = await dividir(10, 0);
       console.log(resultado);
    } catch (error) {
        //obtenemos en el caso de que haya un reject en nuestra promesa
        console.log(error);
    }
}

funcionAsincrona();
