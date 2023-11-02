import express from 'express';
import cookieParser from 'cookie-parser';
import __dirname from './utils.js';
import handlebars from 'express-handlebars';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Setear nuestro middleware dee cookie parser a nivel de app
app.use(cookieParser('Coder55575secret'));

app.use(express.static(`${__dirname}/public`))

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('cookies');
});

app.post('/cookie', (req, res) => {
    const data = req.body;
    res.cookie('CoderCookie', data, { maxAge: 10000 }).send({ status: 'success', message: 'Cookie configurada correctamente' });
});

app.listen(8080, () => console.log('Server running'))