import express from 'express';
import handlebars from 'express-handlebars';
import { __dirname } from './utils.js';
import viewsRouter from './routes/views.router.js'
import usersRouter from './routes/users.router.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Vamos a configurar nuestro motor de plantillas handlebars
//Motor de plantillas a usar
app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);
app.use('/api/users', usersRouter);

app.listen(8080, () => console.log('Server running'));