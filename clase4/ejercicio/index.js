const { UserManager } = require("./managers/UserManager");

const manager = new UserManager('./files/Usuarios.json');

const env = async () => {
    const usuarios = await manager.getUsers();
    console.log(usuarios);

    const user = {
        nombre: 'Lucas',
        apellido: 'Paz',
        edad: 20,
        curso: 'Backend'
    };

    await manager.createUser(user);

    const usuariosResultadoFinal = await manager.getUsers();
    console.log(usuariosResultadoFinal);
}

env();