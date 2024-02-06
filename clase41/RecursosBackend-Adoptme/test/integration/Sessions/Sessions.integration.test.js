import { expect } from 'chai';
import supertest from 'supertest';

const requester = supertest('http://localhost:8080');

describe('Testing del módulo de sessions', () => {
    let cookie;

    it('Debemos registrar un usuario correctamente', async () => {
       const userMock = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'ch@coder.com',
            password: '1234'
       };

       const { statusCode } = await requester.post('/api/sessions/register').send(userMock);
       expect(statusCode).to.be.eql(200);
    });

    it('Debemos loguear al usuario y retornar una cookie', async () => {
        const credentialsMock = {
            email: 'ch@coder.com',
            password: '1234'
        };

        const loginResult = await requester.post('/api/sessions/login').send(credentialsMock);
        const cookieResult = loginResult.headers['set-cookie'][0];
        // 'coderCookie=asdhfasdfashjdfgasjdf'
        expect(cookieResult).to.be.ok;

        const cookieResultSplit = cookieResult.split('=');
        // ['coderCookie', 'asdhfasdfashjdfgasjdf'];

        cookie = {
            name: cookieResultSplit[0],
            value: cookieResultSplit[1]
        }

        expect(cookie.name).to.be.ok.and.eql('coderCookie');
        expect(cookie.value).to.be.ok;
     });

     it('Debemos enviar una cookie en el servicio current y entregar la información del usuario', async () => {
        const { _body } = await requester.get('/api/sessions/current')
            .set('Cookie', [`${cookie.name}=${cookie.value}`]);
        expect(_body.payload.email).to.be.eql('ch@coder.com');
     });
})