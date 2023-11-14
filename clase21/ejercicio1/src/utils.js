import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bcrypt from 'bcrypt';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//1. hashear nuestra contraseña
const createHash = password =>
        bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    //1234
    //ASDASD435@#$#$

//2. validar nuestro password
const isValidPassword = (plainPassword, hashedPassword) =>
    bcrypt.compareSync(plainPassword, hashedPassword);

export {
    __dirname,
    createHash,
    isValidPassword
}

//1234
//$%#$$BAJSDBASD

//correo
//1234