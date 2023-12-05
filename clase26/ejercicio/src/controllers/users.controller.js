import { saveUser as saveUserService, getUsers as getUsersService } from '../services/users.service.js'

const getUsers = async (req, res) => {
    try {
        //Voy a obtener el listado de usuarios
        const users = await getUsersService();
        res.send({ payload: users });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

const saveUser = async (req, res) => {
    try {
        const user = req.body;
        await saveUserService(user);
        res.send({ payload: user });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

export {
    saveUser,
    getUsers
}