import { Router } from 'express';
import { getToys, saveToy } from '../controllers/toys.controller.js';

const router = Router();

//Esta capa tiene como responsabilidad, definir el ep o servicio: verbo http, ruta, middlewares y el llamado a la capa inferior (controllers)

router.get('/', getToys);
router.post('/', saveToy);

export default router;