import express from 'express';
import handlebars from 'express-handlebars';
import { __dirname } from './utils.js';

const app = express();

//Vamos a configurar nuestro motor de plantillas handlebars
//Motor de plantillas a usar
app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

const users = [
{
    name: "Juan",
    last_name: "Pérez",
    age: 30,
    phone: "123-456-7890",
    email: "juan.perez@example.com"
},
{
    name: "María",
    last_name: "González",
    age: 25,
    phone: "987-654-3210",
    email: "maria.gonzalez@example.com"
},
{
    name: "Carlos",
    last_name: "López",
    age: 35,
    phone: "555-555-5555",
    email: "carlos.lopez@example.com"
},
{
    name: "Ana",
    last_name: "Martínez",
    age: 28,
    phone: "111-222-3333",
    email: "ana.martinez@example.com"
},
{
    name: "Luis",
    last_name: "Rodríguez",
    age: 40,
    phone: "999-888-7777",
    email: "luis.rodriguez@example.com"
}
];

app.get('/', (req, res) => {
    const random = Math.floor(Math.random()*users.length);
    res.render('users', { user: users[random] });
});

app.listen(8080, () => console.log('Server running'));