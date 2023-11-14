import { Router } from 'express';
import { authToken, generateToken } from '../utils.js';

const router = Router();

const users = [];

router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const exists = users.find(user => user.email === email);

        if (exists) return res.status(400).send({ status: 'error', message: 'user already exists' });

        const user = {
            name,
            email,
            password
        }

        console.log(user);

        users.push(user);

        console.log(users);
        //delete user.password;

        //generar el jwt
        const accessToken = generateToken(user);
        res.send({ status: 'success', access_token:  accessToken});
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(users);
        console.log(email, password);

        const user = users.find(user => user.email === email && user.password === password);

        if (!user) return res.status(401).send({ status: 'error', message: 'invalid credentials' });

        //generar el jwt
        // delete user.password;
        const accessToken = generateToken(user);
        res.send({ status: 'success', access_token:  accessToken});
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
});

router.get('/private', authToken, (req, res) => {
    res.send({ status: 'success', payload: req.user });
})

export default router;