import { Router as expressRouter } from 'express';
import jwt from 'jsonwebtoken';

export default class Router {
    constructor() {
        this.router = expressRouter();
        this.init(); //es que nuestra padre tenda la definición del método y las clases hijas tengan la implementación
    }

    getRouter() {
        return this.router;
    }

    init() {}

    //get, post, put, delete, patch
    //router.get('/users', middlewares, callback (req, res) => {})
    //(1, 2, 3, 4, 5, 6, 7)
    //[1,2,3,4, 5,6,7]
    get(path, policies, ...callbacks) {
        this.router.get(
            path,
            this.handlePolicies(policies),
            this.generateCustomResponse,
            this.applyCallbacks(callbacks)
        )
    }

    post(path, policies, ...callbacks) {
        this.router.post(
            path,
            this.handlePolicies(policies),
            this.generateCustomResponse,
            this.applyCallbacks(callbacks)
        )
    }

    generateCustomResponse = (req, res, next) => {
        res.sendSuccess = (data) => {
            res.status(200).json({ data });
        };

        res.sendServerError = (error) => {
            res.status(500).json( { error } )
        };

        res.sendClientError = (error) => {
            res.status(400).json({ error });
        };

        next();
    }

    handlePolicies = (policies) => (req, res, next) => {
        // ['PUBLIC']
        if(policies[0] === 'PUBLIC') return next();
        const authToken = req.headers['authorization'];
        if(!authToken)
            return res.status(401).json({ error: 'no token provide' });
        //Bearer JSDFKSJADFHK23453W54
        const token = authToken.split(" ")[1];
        const user = jwt.verify(token, 'secretCoder');
        // {
        //     email: 'user@gmail.com',
        //     role: 'ADMIN'
        // }
        if(!policies.includes(user.role.toUpperCase()))
            return res.status(403).json({ error: 'not permissions' });

        req.user = user;
        next();
    }

    applyCallbacks(callbacks) {
        //mapear los callbacks 1 a 1, obteniedo sus parámetros (req, res)
        return callbacks.map((callback) => async (...params) => {
            try {
                //apply, va a ajecuttar la función callback, a la instancia de nuestra clase que es el router
                await callback.apply(this, params);
            } catch (error) {
                params[1].status(500).json({ status: 'error', message: error.message })
            }
        }) //[req, res]
    }
}