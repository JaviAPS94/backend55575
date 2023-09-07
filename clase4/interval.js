const contador = () => {
    let contador = 1;

    const timer = setInterval(() => {
        //implementación de la función que vamos a ejecutar
        contador++;
        console.log(contador);
        if (contador > 5) {
            clearInterval(timer);
        }
    }, 1000)
};

console.log('inicio de tareas');
contador();
console.log('fin de tareas')