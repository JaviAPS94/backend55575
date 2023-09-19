const http = require('http');

//Voy a crear mi primer servidor backend
const server = http.createServer((req, res) => {
    res.end('Mi primer hola mundo desde el backend update #4');
});

//Tenemos que levantar el servidor en algún puerto en específico
server.listen(8080, () => {
    console.log('Listening on port 8080');
});