import UserManager from "./managers/UserManager.js";

const manager = new UserManager('./files/Usuarios.json');

const env = async () => {
    // const usuarios = await manager.getUsers();
    // console.log(usuarios);

    // const user = {
    //     nombre: 'Lucas',
    //     apellido: 'Paz',
    //     usuario: 'lp94',
    //     contrasena: '1234'
    // };

    // await manager.createUser(user);

    // const usuariosResultadoFinal = await manager.getUsers();
    // console.log(usuariosResultadoFinal);
    await manager.validateUser('sadfsfdasdf', 'test')
}

env();