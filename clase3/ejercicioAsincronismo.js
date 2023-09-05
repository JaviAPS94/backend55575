const suma = (numero1, numero2) => {
    return new Promise((resolve, reject) => {
        if (numero1 === 0 || numero2 === 0) reject('operación innecesaria');
        if (numero1 + numero2 < 0) reject('La calculadora solo debe retornar valores positivos');
        resolve(numero1 + numero2);
    });
};

const resta = (numero1, numero2) => {
    return new Promise((resolve, reject) => {
        if (numero1 === 0 || numero2 === 0) reject('operación innecesaria');
        if (numero1 - numero2 < 0) reject('La calculadora solo debe retornar valores positivos');
        resolve(numero1 - numero2);
    });
};

const multiplicacion = (numero1, numero2) => {
    return new Promise((resolve, reject) => {
        if (numero1 < 0 || numero2 < 0) reject('La calculadora solo debe retornar valores positivos');
        resolve(numero1 * numero2);
    });
};

const division = (numero1, numero2) => {
    return new Promise((resolve, reject) => {
        if (numero2 === 0) reject('No se puede hacer divisiones entre cero');
        resolve(numero1/numero2);
    });
};

const calculos = async () => {
    try {
        const numero1 = 5;
        const numero2 = -4;

        console.log(await suma(numero1, numero2));
        console.log(await resta(numero1, numero2))
        console.log(await multiplicacion(numero1, numero2))
        console.log(await division(numero1, numero2))
    } catch (error) {
        console.log(error);
    }
}

calculos();