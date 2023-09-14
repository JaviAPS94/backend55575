//generar 10000 #s aleatorios del 1 al 20
// 5
// 1
// 2
// 17
// 19
// 5
// 5
// bucle for
// random le voy a decir que quiero generar 3s del 1 al 20

// {
//     5: 3,
//     17: 5,
// }

let objetoResultado = {

};

//5
// {
//     '5': 1
// }
// {
//     test1: "cadena de texto"
// }

// objetoResultado.test1

for (let i = 0; i < 10000; i++) {
    const randomNumber = Math.round(Math.random()*20);
    //La clave que acabo de generar es el # randomico
    if(objetoResultado[randomNumber]) {
        objetoResultado[randomNumber] += 1;
    } else {
        objetoResultado[randomNumber] = 1;
    }
}

console.table(objetoResultado)
