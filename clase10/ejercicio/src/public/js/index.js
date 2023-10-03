//Con este socket vamos a establerecer la comunicación con nuestro servidor
const socket = io();

socket.emit('message', 'Hola es un mensaje desde el cliente');

socket.on('evento_socket_individual', data => {
    console.log(data);
});

socket.on('evento_todos_menos_actual', data => {
    console.log(data);
});

socket.on('evento_todos', data => {
    console.log(data);
});