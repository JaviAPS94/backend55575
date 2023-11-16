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

//Autenticación primer paso lo hace passport
//req.user = {}
const authorization = (role) => {
    return async (req, res, next) => {
        if(req.user.role !== role) return res.status(403).send({ status: 'error', message: 'not permissions' })
        next();
    }
}

export {
    generateToken,
    __dirname,
    PRIVATE_KEY,
    authorization
}