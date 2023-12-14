import * as usersService from '../services/users.service.js';

const getUsers = async (req, res) => {
    try {
        //Necesito un método que me permita obtener el listado de usuarios
        const result = await usersService.getUsers();
        res.send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
}

const createUser = async (req, res) => {
    try {
        console.log(req)
        const user = req.body;
        //Debería tener un método que me permita guardar el usuario
        const result = await usersService.createUser(user);
        res.status(201).send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
}

export {
    getUsers,
    createUser
}