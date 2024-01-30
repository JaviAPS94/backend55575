import Router from './router.js';
import { accessRolesEnum, passportStrategiesEnum } from '../config/enums.js';
import { login, register, test } from '../controllers/users.controller.js';

// Capa ruteo unicamente debería tener definido el identificador de nuestro servicio,
// llamados a middlewares (en el caso de haberlos) y hacer un llamado a los métodos de la capa de controllers
export default class UsersRouter extends Router {
    init() {
        this.post('/login', [accessRolesEnum.PUBLIC], passportStrategiesEnum.NOTHING, login)
        this.post('/test', [accessRolesEnum.PUBLIC], passportStrategiesEnum.NOTHING, test)
        this.post('/register', [accessRolesEnum.PUBLIC], passportStrategiesEnum.NOTHING, register)
    }
}