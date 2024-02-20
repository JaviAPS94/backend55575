//Esta capa se encarga de recibiar la petición de nuestro cliente (objeto req: query params, path params, headers, body)
//Podemos hacer validaciones básicas de los atributos que recibimos
import * as usersService from '../services/users.service.js';
import { InvalidCredentials, UserAlreadyExists } from "../utils/custom.exceptions.js";

//Se encarga de dar una respuesta a nuestros clientes
const register = async (req, res) => {
    try {
        const { first_name, last_name, role, email, password } = req.body;

        if(!first_name || !last_name || !role || !email || !password) {
            return res.sendClientError('incomplete values')
        }

        //Vamos a trabajar con custom errors para lanzar excepciones desde capas inferiores y 
        //catchear dentro del controlador

        const result = await usersService.register({ ...req.body })

        res.sendSuccessNewResourse(result);
    } catch (error) {
        req.logger.error(error.message);

        if(error instanceof UserAlreadyExists) {
            return res.sendClientError(error.message);
        }
        res.sendServerError(error.message);
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) {
            return res.sendClientError('incomplete values')
        }

        //Vamos a trabajar con custom errors para lanzar excepciones desde capas inferiores y 
        //catchear dentro del controlador
        // const user = await this.usersManager.getByEmail(email);

        // if(!user) {
        //     return res.sendClientError('incorrrect crredentials')
        // }

        // const comparePassword = isValidPassword(password, user.password);

        // if(!comparePassword) {
        //     return res.sendClientError('incorrrect crredentials')
        // }
        
        // const accessToken = generateToken(user);
        const accessToken = await usersService.login(password, email);

        res.sendSuccess(accessToken);
    } catch (error) {
        req.logger.error(error.message);
        
        if(error instanceof InvalidCredentials) {
            return res.sendClientError(error.message);
        }
        res.sendServerError(error.message); 
    }
}

const test = async (req, res) => {
    console.log("test")
    res.sendSuccess(accessToken);
}

export {
    login,
    register,
    test
}