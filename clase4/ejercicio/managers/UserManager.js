const fs = require('fs');

class UserManager {
    constructor(path) {
        this.path = path;
    }

    //vamos a obtener los usuarios del archivo Usuarios.json
    getUsers = async () => {
        try {
            if (fs.existsSync(this.path)) {
                //en el caso que exista voy a leer su contenido
                const data = await fs.promises.readFile(this.path, 'utf-8');
                const users = JSON.parse(data);
                return users;
            } else {
                return [];
            }
        } catch (error) {
            console.log(error);
        }
    }

    createUser = async (usuario) => {
        try {
            //obtener TODOS los usuarios que tenga almacenado hasta el momento
            //arreglo de objetos
            const users = await this.getUsers();

            if (users.length === 0) {
                usuario.id = 1;
            } else {
                usuario.id = users[users.length - 1].id + 1;
            }

            //insertamos el elemento o usuario
            users.push(usuario);

            //una vez que ya hemos terminado el procesamiento
            await fs.promises.writeFile(this.path, JSON.stringify(users, null, '\t'));

            return usuario;

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = {
    UserManager
}