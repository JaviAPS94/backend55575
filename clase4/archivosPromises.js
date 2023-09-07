const fs = require('fs');

//función asincrona
const operacionesArchivosAsincrono = async () => {
    try {
        await fs.promises.writeFile('./fs-promesas.txt', 'Hola mundo desde promesas');

        //esperamos la resolución de la promesa, pueden pasar dos cosas, que todo haya ido bien y tenemos el resultado
        //y en el caso de que haya un falló
        let resultado = await fs.promises.readFile('./fs-promesas.txt', 'utf-8');

        console.log(resultado);

        await fs.promises.appendFile('./fs-promesas.txt', '\nMás contenido');

        resultado = await fs.promises.readFile('./fs-promesas.txt', 'utf-8');

        console.log(resultado);

        await fs.promises.unlink('./fs-promesas.txt');
    } catch (error) {
        //entramos en el catch en el caso de que algo pase
        console.log(error);
    }
}

operacionesArchivosAsincrono();