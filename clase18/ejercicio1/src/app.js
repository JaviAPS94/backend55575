import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Setear nuestro middleware dee cookie parser a nivel de app
app.use(cookieParser('Coder55575secret'));

//Setear una cookie
app.get('/cookies', (req, res) => {
    res.cookie('CoderCookie', 'Esta es una cookie muy poderosa', { maxAge: 30000 })
        .send('Cookie configurada correctamente');
});

app.get('/all-cookies', (req, res) => {
    res.send(req.cookies);
});

app.get('/delete-cookies', (req, res) => {
    res.clearCookie('CoderCookie').send('Cookie eliminada correctamente');
});

app.get('/set-signed-cookies', (req, res) => {
    res.cookie('CoderSignedCookie', 'Esta es una cookie firmada muy poderosa', { maxAge: 30000, signed: true })
        .send('Cookie configurada correctamente')
});

app.get('/all-signed-cookies', (req, res) => {
    res.send(req.signedCookies);
});

app.listen(8080, () => console.log('Server running'))