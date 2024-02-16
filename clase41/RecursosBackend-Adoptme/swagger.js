import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        version: '1.0.0',
        title: 'Documentación generada con autogen',
        description: 'Documentación proyecto adopción de mascotas'
    },
    host: 'localhost:8080',
    basePath: '/',
    schemes: ['http'],
    definitions: {
        User: {
            name: 'Coder',
            lastname: 'House'
        }
    }
};

const outputFile = './swagger-output.json';
const endPointsFiles = ['./src/app.js'];

swaggerAutogen(outputFile, endPointsFiles, doc).then(async () => {
    await import('./src/app.js');
})