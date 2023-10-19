import { Router } from 'express';
import { usersModel } from '../models/users.model.js';

const router = Router();


//READ
router.get('/', async (req, res) => {
    try {
        const users = await usersModel.find();
        res.send({ status: 'success', payload: users });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: error.message });
    }
});

//CREATE
router.post('/', async (req, res) => {
    const { first_name, last_name, email } = req.body;

    if (!first_name || !last_name || !email) {
        return res.status(400).send({ status: 'error', message: 'incomplete values' });
    }

    try {
        const result = await usersModel.create({
            first_name,
            last_name,
            email
        });

        res.send({ status: 'success', payload: result });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: error.message });
    }
});

//UPDATE
//Para actualizar necesito saber el id del documento que quiero actualzar
router.put('/:uid', async (req, res) => {
    const { uid } = req.params;

    const userToReplace = req.body;

    if (!userToReplace.first_name || !userToReplace.last_name || !userToReplace.email) {
        return res.status(400).send({ status: 'error', message: 'incomplete values' });
    }

    try {
        const result = await usersModel.updateOne({ _id: uid }, userToReplace)

        res.send({ status: 'success', payload: result });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: error.message });
    }
});

//DELETE
router.delete('/:uid', async (req, res) => {
    const { uid } = req.params;

    try {
        //Borrado físico
        const result = await usersModel.deleteOne({ _id: uid});

        res.send({ status: 'success', payload: result });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: error.message });
    }
});

export default router;