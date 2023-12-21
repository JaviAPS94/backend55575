import { Router } from 'express';
import { generateUsers } from '../utils.js';

const router = Router();

router.get('/', (req, res) => {
    let users = [];

    for(let i=0; i < 100; i++) {
        users.push(generateUsers());
    }

    res.send({
        status: 'ok',
        counter: users.length,
        data: users
    });
});

export default router;