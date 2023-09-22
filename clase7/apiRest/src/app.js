//Resolver un crud de usuarios
//Create -> POST*
//Read -> GET*
//Update -> PUT
//Delete -> DELETE
import express from 'express';

const app = express();

//Middleware
//Para poder rercibir peticiones en formato JSON
app.use(express.json());

const users = [];

//Obtención de usuarios
app.get('/users', (req, res) => {
    res.send(users); //Con express se sobreentiende que en esta respuesta estamos retornando un código 200
});

//Crear un recurso(usuario)
app.post('/users', (req, res) => {
    // {
    //     first_name: 'Carlos',
    //     last_name: 'Olivera'
    // }
    // Este objeto lo vamos a enviar desde POSTMAN
    const user = req.body;

    if(!user.first_name || !user.last_name) {
        //Error del cliente porque no envia los atributos obligatorios
        return res.status(400).send({ status: 'error', error: 'incomplete values' })
    }

    if(users.length === 0) {
        user.id = 1;
    } else {
        user.id = users[users.length - 1].id + 1;
    }

    users.push(user);
    //Se sobreentiende que será un 200
    //Deberiamos retornar un 201, porque estamos creando un nuevo recurso
    res.status(201).send({ status: 'success', message: 'user created' });
});

//Actualización del usuario
app.put('/users/:id', (req, res) => {
    //Vamos a enviar el id del usuario que queremos actualizar
    //Vamos a enviar el body del usuario con los campos actualizados
    const user = req.body;
    const userId = Number(req.params.id);

    if(!user.first_name || !user.last_name) {
        //Error del cliente porque no envia los atributos obligatorios
        return res.status(400).send({ status: 'error', error: 'incomplete values' })
    }

    const index = users.findIndex(user => user.id === userId);

    //Si lo encontró
    if(index !== -1) {
        //Vamos a agregar el id al usuario que queremos actualizar
        const newUser = { id: userId, ...user }
        users[index] = newUser;
        res.send({ status: 'success', message: 'user updated' });
    } else {
        res.status(404).send({ status: 'error', error: 'user not found' });
    }
});

app.patch('/users/:id', (req, res) => {
    //Vamos a enviar el id del usuario que queremos actualizar
    //Vamos a enviar el body del usuario con los campos actualizados
    const userToUpdate = req.body;
    const userId = Number(req.params.id);

    const index = users.findIndex(user => user.id === userId);

    //Si lo encontró
    if(index !== -1) {
        const user = users[index];
        users[index] = Object.assign(user, userToUpdate);
        res.send({ status: 'success', message: 'user updated' });
    } else {
        res.status(404).send({ status: 'error', error: 'user not found' });
    }
})

//Eliminación de un recurso
app.delete('/users/:id', (req, res) => {
    //Obtenemos el id del path param
    const userId = Number(req.params.id);

    //Buscamos el usuario por el id que quiero eliminar
    const index = users.findIndex(user => user.id === userId);

    //Si lo encontramos, lo eliminamos
    if(index !== -1) {
        users.splice(index, 1);
        res.send({ status: 'success', message: 'user deleted' });
    } else {
        //El usuario que queremos eliminar no existe
        res.status(404).send({ status: 'error', error: 'user not found' });
    }
})


app.listen(8080);