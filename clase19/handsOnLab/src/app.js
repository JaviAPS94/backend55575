import express from 'express';
import sessionsRouter from './routes/sessions.router.js';
import viewsRouter from './routes/views.router.js';
import MongoStore from 'connect-mongo';
import session from 'express-session';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import __dirname from './utils.js';

const app = express();

try {
    await mongoose.connect('mongodb+srv://alexpinaida55575:HHXI4o0vfaP5bUHT@cluster55575ap.f6civky.mongodb.net/clase19?retryWrites=true&w=majority');
    console.log('DB connected');
} catch (error) {
    console.log(error.message);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/public`));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use(session({
    store: MongoStore.create({
        client: mongoose.connection.getClient(),
        ttl: 3600
    }),
    secret: 'Coder5575Secret',
    resave: true, //nos sirve para poder refrescar o actualizar la sesión luego de un de inactivadad
    saveUninitialized: true, //nos sirve para desactivar el almacenamiento de la session si el usuario aún no se ha identificado o aún no a iniciado sesión
    // cookie: {
    //     maxAge: 30000
    // }
}));

app.use('/', viewsRouter);
app.use('/api/sessions', sessionsRouter);

app.listen(8080, () => console.log('Server running'));