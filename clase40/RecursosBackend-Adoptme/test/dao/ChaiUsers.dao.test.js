import mongoose from 'mongoose';
import Users from '../../src/dao/Users.dao.js';
import { expect } from 'chai';

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
        // assert.strictEqual(Array.isArray(result), true);
        expect(Array.isArray(result)).to.be.equal(true);
        expect(result).to.be.deep.equal([]);
    });

    it('El dao debe agregar correctamente un elemento a la base de datos.', async () => {
        const mockUser = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'ch@coder.com',
            password: '1234'
        }

        const result = await usersDao.save(mockUser);

        // assert.ok(result._id);
        expect(result._id).to.be.ok;
    });

    it('Al agregar un nuevo usuario, éste debe crearse con un arreglo de mascotas vacío por defecto.', async () => {
        const mockUser = {
            first_name: 'Agustina',
            last_name: 'Teme',
            email: 'at@coder.com',
            password: 'abcd'
        };

        const result = await usersDao.save(mockUser);
        
        // assert.deepStrictEqual(result.pets, []);
        expect(result.pets).to.be.eql([]);
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
        
        // assert.strict(typeof user, 'object');
        expect(typeof user).to.be.eql('object');
    });

    it('El dao puede actualizar el usuario.', async () => {
        //1.- Ingresar un usuario para actualizar posteriormente
        const mockUser = {
            first_name: 'Agustina',
            last_name: 'Teme',
            email: 'at@coder.com',
            password: 'abcd'
        };

        const resultSave = await usersDao.save(mockUser);

        //2.- Actualizar el usuario
        const mockUserUpdate = {
            first_name: 'Agustina Update',
            last_name: 'Teme Update',
            email: 'at@coder.com',
            password: 'passwordupdate'
        };

        await usersDao.update(resultSave._id, mockUserUpdate);

        //3.- Vamos a obtener el usuario usando el método getBy
        const user = await usersDao.getBy({ email: mockUser.email });

        expect(user.first_name).to.be.eql('Agustina Update');
        expect(user.last_name).to.be.eql('Teme Update');
    });

    it('El dao puede eliminar el usuario.', async () => {
        //1.- Ingresar un usuario para actualizar posteriormente
        const mockUser = {
            first_name: 'Agustina',
            last_name: 'Teme',
            email: 'at@coder.com',
            password: 'abcd'
        };

        const resultSave = await usersDao.save(mockUser);

        //2.- Eliminar el usuario
        await usersDao.delete(resultSave._id);

        const users = await usersDao.get();
        
        expect(users).to.be.deep.eql([]);
    });
})