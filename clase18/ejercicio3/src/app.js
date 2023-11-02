import express from 'express';
import session from 'express-session';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'Coder5575Secret',
    resave: true, //nos sirve para poder refrescar o actualizar la sesión luego de un de inactivadad
    saveUninitialized: false, //nos sirve para desactivar el almacenamiento de la session si el usuario aún no se ha identificado o aún no a iniciado sesión
    // cookie: {
    //     maxAge: 30000
    // }
}));

function auth(req, res, next) {
    if(req.session?.user === 'pepe' && req.session?.admin) {
        return next();
    }

    return res.status(401).send('Error de validación de permisos');
}

app.get('/session', (req, res) => {
    if(req.session.counter) {
        req.session.counter++;
        res.send(`Se ha vistido el sitio ${req.session.counter} veces`)
    } else {
        req.session.counter = 1;
        res.send('Bienvenido');
    }
});

app.get('/login', (req, res) => {
    const { username, password } = req.query;

    if(username !== 'pepe' || password !== 'pepepass') {
        return res.status(401).send('Login fallido');
    }

    req.session.user = username;
    req.session.admin = true;
    res.send('Login exitoso');
});

app.get('/private', auth, (req, res) => {
    res.send('Tienes permisos para acceder a este servicio');
});

app.get('/logout', (req, res) => {
    req.session.destroy(error => {
        if(!error) res.send('Logout exitoso')
        else res.send({ status: 'error', message: error.message });
    })
});

app.listen(8080);