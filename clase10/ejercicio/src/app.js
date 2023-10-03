import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import { Server } from 'socket.io';
import viewsRouter from './routes/views.router.js';

const app = express();

//Servidor archivos estáticos
app.use(express.static(`${__dirname}/public`));

//Motor de plantillas
app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

//Routes
app.use('/', viewsRouter);

const server = app.listen(8080, () => console.log('Server running'));

//Socket io
const socketServer = new Server(server);

// socketServer.on('connection', socket => {
//     console.log('Nuevo cliente conectado');

//     socket.on('message', data => {
//         console.log(data);
//     });

//     //Mensaje privado, unicamente al socket conectado de manera individual
//     socket.emit('evento_socket_individual', 'Este es un mensaje que solo lo debe recibir el socket');

//     socket.broadcast.emit('evento_todos_menos_actual', 'Lo veran todos menos el quue envió el mensaje');

//     socketServer.emit('evento_todos', 'Lo recibiran todos los clientes conectados INCLUYENDOME')
// });

const logs = [];

socketServer.on('connection', socket => {
    socket.on('message1', data => {
        socketServer.emit('log', data);
    })

    socket.on('message2', data => {
        logs.push({ socketid: socket.id, message: data })
        socketServer.emit('log', { logs });
    })
})