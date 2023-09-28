import express from 'express';
import handlebars from 'express-handlebars';
import { __dirname } from './utils.js';

const app = express();

//Vamos a configurar nuestro motor de plantillas handlebars
//Motor de plantillas a usar
app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    const testUser = {
        name: 'Kevin'
    };

    res.render('index', testUser);
});

app.listen(8080, () => console.log('Server running'));