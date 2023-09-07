//node_modules -> se encuentra todas las dependencias nativas o globales que hayamos instalado
const fs = require('fs');

//Implementación de archivos de manera sincrónica

fs.writeFileSync('./ejemplo.txt', 'Hola coder estamos trabajando en un archivo');

if(fs.existsSync('./ejemplo.txt')) {
    let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8');
    console.log(contenido);

    fs.appendFileSync('./ejemplo.txt', '\nMás contenido');

    contenido = fs.readFileSync('./ejemplo.txt', 'utf-8');
    console.log(contenido);

    fs.unlinkSync('./ejemplo.txt');
}