import { Router } from 'express';
import usersModel from '../models/users.model.js';
import { createHash, isValidPassword } from '../utils.js';
import passport from 'passport';

const router = Router();

router.post('/register', passport.authenticate('register', { failureRedirect: 'fail-register' }), async (req, res) => {
    res.status(201).send({ status: 'success', message: 'user registered' });
});

router.get('/fail-register', async (req, res) => {
    res.status(500).send({ status: 'error', message: 'register fail' });
});

router.post('/login', passport.authenticate('login', { failureRedirect: 'fail-login' }), async (req, res) => {
    if(!req.user) {
        return res.status(401).send({ status: 'error', message: 'invalid credentials' })
    }

    req.session.user = {
        name: `${req.user.first_name} ${req.user.last_name}`,
        email: req.user.email,
        age: req.user.age
    }

    res.send({ status: 'success', message: 'login success' })
});

router.get('/fail-login', async (req, res) => {
    res.status(500).send({ status: 'error', message: 'login fail' });
});

router.get('/logout', (req, res) => {
    req.session.destroy(error => {
        if(error) return res.status(500).send({ status: 'error', message: error.message });
        res.redirect('/');
    })
})

export default router;