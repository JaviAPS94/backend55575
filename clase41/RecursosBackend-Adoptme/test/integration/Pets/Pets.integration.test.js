import { expect } from 'chai';
import supertest from 'supertest';

const requester = supertest('http://localhost:8080');

describe('Purbeas de integración módulo de mascotas', () => {
    it('POST de /api/pets debe crear una mascota correctamente', async () => {
        const petMock = {
            name: 'Patitas',
            specie: 'Gato',
            birthDate: '12-30-2023'
        };

        const { statusCode, _body } = await requester.post('/api/pets').send(petMock);
        expect(statusCode).to.be.eql(200);
        expect(_body.payload).to.have.property('_id');
    })

    it('POST de /api/pets se debe corroborar que la mascota creada cuente con una propiedad adopted:false', async () => {
        const petMock = {
            name: 'Patitas',
            specie: 'Gato',
            birthDate: '12-30-2023'
        };

        const { statusCode, _body } = await requester.post('/api/pets').send(petMock);
        expect(statusCode).to.be.eql(200);
        expect(_body.payload).to.have.property('adopted');
        expect(_body.payload.adopted).to.be.eql(false);
    })

    it('POST de /api/pets se debe corroborar que si se desea crear una mascota sin el campo name, el módulo debe responder con un status 400', async () => {
        const petMock = {
            specie: 'Gato',
            birthDate: '12-30-2023'
        };

        const { statusCode } = await requester.post('/api/pets').send(petMock);
        expect(statusCode).to.be.eql(400);
    })

    it('GET de /api/pets se debe corroborar que la respuesta debe tener los campos status y payload. Además, payload debe ser de tipo arreglo', async () => {
        const { statusCode, _body} = await requester.get('/api/pets');
        expect(statusCode).to.be.eql(200);
        expect(_body).to.have.property('status');
        expect(_body).to.have.property('payload');
        expect(Array.isArray(_body.payload)).to.be.eql(true);
    })

    it('PUT de /api/pets se debe corroborar que se haga la actualización correcta a una mascota determinada', async () => {
        const petMock = {
            name: 'Patitas',
            specie: 'Gato',
            birthDate: '12-30-2023'
        };
        
        //Crear una mascota
        const { _body } = await requester.post('/api/pets').send(petMock);

        const id = _body.payload._id;

        //Actualizar la mascota
        const petMockUpdated = {
            name: 'Patitas updated',
            specie: 'gato updated',
            birthDate: '12-20-2023'
        };

        const updateResult = await requester.put(`/api/pets/${id}`).send(petMockUpdated);

        expect(updateResult.statusCode).to.be.eql(200);
        expect(updateResult._body.message).to.be.eql('pet updated');
    });

    it('DELETE de /api/pets se debe corroborar que se elimine la última mascota agregada', async () => {
        const petMock = {
            name: 'Patitas',
            specie: 'Gato',
            birthDate: '12-30-2023'
        };
        
        //Crear una mascota
        const { _body } = await requester.post('/api/pets').send(petMock);

        const id = _body.payload._id;

        //Eliminar la mascota
        const deleteResult = await requester.delete(`/api/pets/${id}`);

        expect(deleteResult.statusCode).to.be.eql(200);

        const getResult = await requester.get('/api/pets');

        const pets = getResult._body.payload;

        expect(pets.find(pet => pet._id === id)).to.be.eql(undefined);
    });

    it('POST de /api/pets/withimage debe crear una mascota con imagen correctamente', async () => {
        const petMock = {
            name: 'Patitas',
            specie: 'Gato',
            birthDate: '12-30-2023'
        };
        
        const result = await requester.post('/api/pets/withimage')
            .field('name', petMock.name)
            .field('specie', petMock.specie)
            .field('birthDate', petMock.birthDate)
            .attach('image', './test/integration/Pets/dog1.jpeg');

        console.log(result)
        
        expect(result.statusCode).to.be.eql(200);
    });
})