import express from 'express';
import mongoose from 'mongoose';
import usersRouter from './routes/users.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', usersRouter);

//Establecer la conexion a nuestra BDD
try {
    //String de conexión
    await mongoose.connect('mongodb+srv://alexpinaida55575:HHXI4o0vfaP5bUHT@cluster55575ap.f6civky.mongodb.net/clase12?retryWrites=true&w=majority');
    console.log('BDD conectada');
} catch (error) {
    console.log(error.message);
}

app.listen(8080);