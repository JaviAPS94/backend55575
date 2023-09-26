import { Router } from 'express';
import { uploader } from '../utils.js';

const router = Router();
const pets = [];

//Middleware a nivel de router
router.use((req, res, next) => {
    console.log('Time Router: ', Date.now());
    next();
});

//Obtener el listado de mascotas
router.get('/', (req, res) => {
    res.send({ status: 'success', payload: pets });
});

router.post('/', (req, res) => {
    // {
    //     name: 'patitas',
    //     specie: 'gato'
    // }
    const pet = req.body; //Obteniendo el objeto que vamos a insertar
    if(!pet.name) {
        return res.status(400).send({ status: 'error', error: 'incomplete values' });
    }
    pets.push(pet);
    res.send({ status: 'success', payload: pet });
});

router.post('/v2', uploader.single('thumbnail'), (req, res) => {
    //Validamos que obligatoriamente el usuario debería enviar un archivo con la imagen de la mascota
    const filename = req.file.filename;
    if(!filename) return res.status(500).send({ status: 'error', error: 'no se puede subir el archivo' });
    // {
    //     name: 'patitas',
    //     specie: 'gato'
    // }
    const pet = req.body; //Obteniendo el objeto que vamos a insertar
    if(!pet.name) {
        return res.status(400).send({ status: 'error', error: 'incomplete values' });
    }
    pet.thumbnail = `http://localhost:8080/img/pets/${filename}`;
    pets.push(pet);
    res.send({ status: 'success', payload: pet });
});

export default router;