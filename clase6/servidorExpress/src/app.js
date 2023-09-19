import express from 'express';

//Creando el servidor http usando express
const app = express();

const users = [
    { id: 1, nombre: 'Alex', apellido: 'Pinaida', edad: 28, genero: 'M' },
    { id: 2, nombre: 'Alejandro', apellido: 'Resk', edad: 25, genero: 'M' },
    { id: 3, nombre: 'Nora', apellido: 'Saucedo', edad: 22, genero: 'F' }
];

//Vamos a construir nuestro primer endpoint o servicio
//Vamos a revisar la petición http de tipo GET
app.get('/saludo', (req, res) => {
    res.send('Hola a todos este es mi primer endpoint desde express');
});

app.get('/bienvenida', (req, res) => {
    res.send(`<h1 style="color:blue">Bienvenido a mi primer servidor de express</h1>`)
});

//Servicio usando un path param
app.get('/unparametro/:nombre', (req, res) => {
    res.send(`Bienvenido ${req.params.nombre}`);
});

app.get('/dosparametros/:nombre/:apellido', (req, res) => {
    res.send(`Bienvenido ${req.params.nombre} ${req.params.apellido}`);
});

//Debemos construir un servicio que me permita obtener un usuario por su id
//El identificador del usuario que vamos a buscar lo obtenemos mendiante un path param
//Todo lo que envieemos como path param siempre es una cadena de texto
app.get('/usuario/:id', (req, res) => {
    const userId = Number(req.params.id);
    const user = users.find(u => u.id === userId);
    if (!user) return res.send({ error: 'Usuario no encontrado' });
    res.send(user);
});

app.get('/usuariosquery', (req, res) => {
    // req.query {
    //     edad: 28,
    //     genero: 'M',
    //     nombre: 'Alex'
    // }
    const queryParams = req.query;
    res.send(queryParams);
});

app.get('/usuarios', (req, res) => {
    //Obtenemos el genero del query param
    const genero = req.query.genero;
    //Siempre importante hacer validaciones
    //En el caso de que no llegue el genero o el genero sea diferente de M o F retornamos los usuarios sin filtrar
    if(!genero||(genero!=='M'&&genero!=='F')) return res.send({users});
    //filtramos los usuarios por genero
    const filteredUser = users.filter(user=>user.genero===genero);
    res.send({usuarios: filteredUser});
});

app.listen(8080, () => console.log('Listening on port 8080'));