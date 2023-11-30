process.on('exit', code => {
    console.log(code);
});

process.on('uncaughtException', error => {
    console.log('Atrapa excepciones que no fueron controladas');
    console.log(error);
});

process.on('message');

console.log('probando listeners')
console.log(variable);