import mongoose from 'mongoose';
import Users from '../../src/dao/Users.dao.js';
import { strict as assert } from 'assert';

await mongoose.connect('mongodb+srv://alexpinaida55575:HHXI4o0vfaP5bUHT@cluster55575ap.f6civky.mongodb.net/testing?retryWrites=true&w=majority')

let usersDao;

describe('Probando nuestro dao de usuarios', () => {
    before(() => {
        usersDao = new Users();
    });

    beforeEach(async () => {
        try {
            await mongoose.connection.collections.users.drop();   
        } catch (error) {
            console.log(error);
        }
    });

    //Definir todos nuestros escenarios de pruebas o pruebas unitarias
    it('El dao debe poder obtener todos los usuarios en formato de arreglo', async () => {
        const result = await usersDao.get();
        //Vamos a validar que el valor de result efectivamente es un arreglo
        assert.strictEqual(Array.isArray(result), true);
    });

    it('El dao debe agregar correctamente un elemento a la base de datos.', async () => {
        const mockUser = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'ch@coder.com',
            password: '1234'
        }

        const result = await usersDao.save(mockUser);

        assert.ok(result._id);
    });

    it('Al agregar un nuevo usuario, éste debe crearse con un arreglo de mascotas vacío por defecto.', async () => {
        const mockUser = {
            first_name: 'Agustina',
            last_name: 'Teme',
            email: 'at@coder.com',
            password: 'abcd'
        };

        const result = await usersDao.save(mockUser);
        
        assert.deepStrictEqual(result.pets, []);
    });

    it('El dao puede obtener a un usuario por email.', async () => {
        const mockUser = {
            first_name: 'Agustina',
            last_name: 'Teme',
            email: 'at@coder.com',
            password: 'abcd'
        };

        await usersDao.save(mockUser);

        const user = await usersDao.getBy({ email: mockUser.email });
        
        assert.strict(typeof user, 'object');
    });
})