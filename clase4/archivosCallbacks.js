const fs = require('fs');

fs.writeFile('./archivo-cb.txt', 'Hola mundo estoy trabajando con archivos usando cb',
error => {
    if (error) {
        throw new Error(`Error en la creación del archivo ${error}`)
    }

    fs.readFile('./archivo-cb.txt', 'utf-8', (error, contenido) => {
        if (error) {
            throw new Error(`Error en la lectura del archivo ${error}`)
        }

        console.log(contenido);

        fs.appendFile('./archivo-cb.txt', '\nMás contenido', error => {
            if (error) {
                throw new Error(`Error en la actualización del archivo ${error}`)
            }

            fs.readFile('./archivo-cb.txt', 'utf-8', (error, contenido) => {
                if (error) {
                    throw new Error(`Error en la lectura del archivo ${error}`)
                }

                console.log(contenido);

                fs.unlink('./archivo-cb.txt', error => {
                    if (error) {
                        throw new Error(`Error en la eliminación del archivo ${error}`)
                    }
                })
            })
        })
    })
})