import Router from './router.js';
import jwt from 'jsonwebtoken';

export default class SessionsRouter extends Router {
    init() {
        this.post('/login', ['PUBLIC'], (req, res) => {
            try {
                const user = {
                    email: req.body.email,
                    role: 'ADMIN'
                }

                const token = jwt.sign(user, 'secretCoder');
                res.sendSuccess(token)
            } catch (error) {
                res.sendServerError(error.message);
            }
        })
    }
}