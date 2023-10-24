import { Router } from 'express';
import Students from '../dao/dbManagers/students.manager.js';

const router = Router();
const studentsManager = new Students();

router.get('/', async(req, res) => {
    try {
        const students = await studentsManager.getAll();
        res.send({ status: 'success', payload: students });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
});

router.post('/', async(req, res) => {
    // {
    //     "first_name": "alex", -> firstName
    //     "last_name": "asdasdasd" -> lastName
    // }
    try {
        const { first_name: firstName, last_name: lastName, dni, email, birth_date: birthDate, gender } = req.body;

        if(!firstName || !lastName || !email) {
            return res.status(400).send({ status: 'error', message: 'incomplete values' });
        }

        const result = await studentsManager.save({
            first_name: firstName,
            last_name: lastName,
            dni,
            email,
            birth_date: birthDate,
            gender
        });

        res.status(201).send({ status: 'success', payload: result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
});

export default router;