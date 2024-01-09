import express from 'express';

const app = express();

app.get('/test', (req, res) => {
    res.send('Servicio de prueba update');
});

app.listen(8080);