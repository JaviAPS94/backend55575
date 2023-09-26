import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Parámetros de configuracion
//destino o donde quiero guardar mis archivos
//el nombre de los archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `${__dirname}/public/img/pets`)
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
});

const uploader = multer({
    storage, onError: (err, next) => {
        console.log(err.message);
        next();
    }
})

export {
    __dirname,
    uploader
}