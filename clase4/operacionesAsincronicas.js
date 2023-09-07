const temporizador = (callback) => {
    setTimeout(() => {
        callback();
    }, 5000);
};

const operacion = () => console.log('Realizando la operación');

console.log('Inicio de tareas');

temporizador(operacion);

console.log('fin de tareas');