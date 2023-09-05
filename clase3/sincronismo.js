const delay = () => {
    for(let i = 0; i < 1e8; i++);
}

function hacerTarea(numeroTarea) {
    console.log('Haciendo tarea ....' + numeroTarea);
    delay();
}

// console.log('Iniciando tareas');
// hacerTarea(1);
// hacerTarea(2);
// hacerTarea(3);
// hacerTarea(4);
// console.log('fin de tareas');

console.log('Iniciando tareas con asincronismo');

setTimeout(() => {
    console.log('Haciendo tarea asincrona')
}, 5000);

hacerTarea(1);
hacerTarea(2);
console.log('fin tareas');