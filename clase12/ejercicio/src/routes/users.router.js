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

router.get('/by-filters', async (req, res) => {
    try {
        const { name, lastName, email } = req.query;
        //vamos a buscar los usuarios que concidan el nombre o el apellido o el email
        const users = await usersModel
            .find({ $or: [
                {first_name: name},
                {last_name: lastName},
                {email: email}] });

        res.send({ status: 'success', payload: users });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: error.message });
    }
});

router.get('/paginated', async (req, res) => {
    try {
        const { size = 10, page = 0 } = req.query;
        const skip = page * size;
        const users = await usersModel.find().skip(skip).limit(size);
        res.send({ status: 'success', payload: users });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: error.message });
    }
});

router.get('/by-email', async (req, res) => {
    try {
        const { email } = req.query;
        //[a-zA-Z]
        const users = await usersModel.find({ email: { $regex: new RegExp(email, "i") } }, { first_name: 1, email: 1, _id: 0 }).sort({ first_name: -1 });
        res.send({ status: 'success', payload: users });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: error.message });
    }
});

//Servicio para obtener los usuarios por id
router.get('/:uid', async (req, res) => {
    try {
        const { uid } = req.params;
        const user = await usersModel.findOne({ _id: uid });
        
        if(!user) {
            return res.status(404).send({ status: 'error', message: 'user not found' });
        }

        res.send({ status: 'success', payload: user });
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