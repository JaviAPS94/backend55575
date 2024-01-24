//esta capa es la más importante del proyecto ya que contiene la lógica de negocio

import UsersRepository from "../repositories/users.repository.js";
import { Users } from '../dao/factory.js';
import { InvalidCredentials, UserAlreadyExists } from "../utils/custom.exceptions.js";
import { loginInvalidCredentials } from "../utils/custom.html.js";
import { sendEmail } from "./mail.service.js";
import { createHash, generateToken, isValidPassword } from "../utils/utils.js";

const usersDao = new Users();
const usersRepository = new UsersRepository(usersDao);

const login = async (password, email) => {
    // const user = await this.usersManager.getByEmail(email);
    const user = await usersRepository.getByEmail(email);

    if(!user) {
        throw new InvalidCredentials('incorrect credentials');
    }

    const comparePassword = isValidPassword(password, user.password);

    if(!comparePassword) {
        //Enviar un correo electrónico
        const emailInvalidCredentials = {
            to: user.email,
            subject: 'Login fallido',
            html: loginInvalidCredentials
        };

        await sendEmail(emailInvalidCredentials);

        throw new InvalidCredentials('incorrect credentials');
    }
    
    const accessToken = generateToken(user);

    return accessToken;
}

const register = async (user) => {
    // const existsUser = await this.usersManager.getByEmail(email);
    const userByEmail = await usersRepository.getByEmail(user.email);

    if(userByEmail) {
        // vamos a lanzar una excepcion
        throw new UserAlreadyExists('user already exists')
    }

    const hashedPassword = createHash(user.password);

    const newUser = {
        ...user
    }

    newUser.password = hashedPassword;

    const result = await usersRepository.save(newUser);

    return result;
}

export {
    login,
    register
}