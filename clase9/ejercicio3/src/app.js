import express from 'express';
import handlebars from 'express-handlebars';
import { __dirname } from './utils.js';
import viewsRouter from './routes/views.router.js'

const app = express();

//Vamos a configurar nuestro motor de plantillas handlebars
//Motor de plantillas a usar
app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

//Archivos estáticos
app.use(express.static(`${__dirname}/public`));

// const food = [
// {
//     name: 'Pizza',
//     price: 100
// },
// {
//     name: 'Banana',
//     price: 50
// },
// {
//     name: 'Soda',
//     price: 75
// },
// {
//     name: 'Ensalada',
//     price: 80
// },
// {
//     name: 'Fruta',
//     price: 90
// }
// ];

// app.get('/', (req, res) => {
//     const testUser = {
//         name: 'Rodrigo',
//         role: 'user'
//     };

//     res.render('food', {
//         user: testUser,
//         isAdmin: testUser.role === 'admin',
//         food
//     });
// });

app.use('/', viewsRouter);

app.listen(8080, () => console.log('Server running'));