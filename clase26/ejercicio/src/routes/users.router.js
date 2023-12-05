import { Router } from 'express';
import { getUsers, saveUser } from '../controllers/users.controller.js';

const router = Router();

//Esta capa tiene como responsabilidad, definir el ep o servicio: verbo http, ruta, middlewares y el llamado a la capa inferior (controllers)

router.get('/', getUsers);
router.post('/', saveUser);

export default router;