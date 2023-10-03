const socket = io();

const input = document.getElementById('textbox');
const log = document.getElementById('log');

// input.addEventListener('keyup', evt => {
//     const { key } = evt;
//     socket.emit('message1', key);
// });

// socket.on('log', data => {
//     log.innerHTML+=data;
// });

input.addEventListener('keyup', evt => {
    if(evt.key==='Enter') {
        socket.emit('message2', input.value);
        input.value=''
    }
});

socket.on('log', data => {
    let logs = '';
    data.logs.forEach(log => {
        logs += `${log.socketid} dice: ${log.message}<br/>`
    });

    log.innerHTML = logs;
});