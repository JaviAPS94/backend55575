import express from 'express';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import { __dirname } from './utils.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Middleware a nivel de aplicación
app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

//Middleware a nivel de ruta o servicio
function middlewareNivelServicio(req, res, next) {
    req.dato1 = 'agregado a nivel del middleware'
    next();
}

//Agregar configuración para servir archivos estáticos
console.log(__dirname);
//Prefijo virtual -> definir una ruta para acceder a nuestros archivos
// app.use(express.static(`${__dirname}/public`));
//Middleware incorporado que es propio de express
app.use('/static-files', express.static(`${__dirname}/public`));

app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);

app.get('/test', middlewareNivelServicio, (req, res) => {
    console.log(variableNoExiste);
    res.send({ payload: {
        dato: req.dato1
    } })
});

//Middleware de manejo de errores, siempre debe ir al final
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).send({ error: err.message });
});

app.listen(8080, () => console.log('Server running'));