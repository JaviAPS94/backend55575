import { fileURLToPath } from 'url';
import { dirname } from 'path';
import jwt from 'jsonwebtoken';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PRIVATE_KEY = 'coder55575'

//Implementación de la generación del JWT y la validación
//DFJGKSDNFJGKSDNFGK345656398U5GSDFNGKJSDNFG23485KDFGNJSDG
const generateToken = (user) => {
    const token = jwt.sign({ user }, PRIVATE_KEY, { expiresIn: '24h' });
    return token;
}

//midleware
const authToken = (req, res, next) => {
    //1. validamos que el token llegue en los headers del request
    const authToken = req.headers.authorization; 

    if(!authToken) return res.status(401).send({ status: 'error', message: 'not authenticated' });

    //Bearer DFJGKSDNFJGKSDNFGK345656398U5GSDFNGKJSDNFG23485KDFGNJSDG
    // {
    //     user: {
    //         name: 'alex',
    //         email: 'ap@gmail.com'
    //     }
    // }
    const token = authToken.split(' ')[1];
    //2. Validar el jwt
    jwt.verify(token, PRIVATE_KEY, (error, credentials) => {
        if (error) return res.status(401).send({ status: 'error',  message: 'not authenticated'});
        req.user = credentials.user;
        next();
    })
}

export {
    generateToken,
    authToken,
    __dirname
}