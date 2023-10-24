import { Router } from 'express';
import Courses from '../dao/dbManagers/courses.manager.js';

const router = Router();
const coursesManager = new Courses();

router.get('/', async(req, res) => {
    try {
        const courses = await coursesManager.getAll();
        res.send({ status: 'success', payload: courses });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
});

router.post('/', async(req, res) => {
    try {
        const { title, description, teacher } = req.body;

        if(!title || !description || !teacher) {
            return res.status(400).send({ status: 'error', message: 'incomplete values' });
        }

        const result = await coursesManager.save({
            title,
            description,
            teacher
        });

        res.status(201).send({ status: 'success', payload: result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
});

router.put('/:id', async(req, res) => {
    try {
        const { title, description, teacher } = req.body;
        const { id } = req.params;

        if(!title || !description || !teacher) {
            return res.status(400).send({ status: 'error', message: 'incomplete values' });
        }

        const result = await coursesManager.update(id, {
            title,
            description,
            teacher 
        });

        res.send({ status: 'success', payload: result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
});

export default router;