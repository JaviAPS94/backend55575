import { expect } from 'chai';
import { createHash, passwordValidation } from '../../src/utils/index.js';

describe('Probando nuestro modulo de utils', () => {
    it('El servicio debe realizar un hasheo efectivo de la contraseña (debe corroborarse que el resultado sea diferente a la contraseña original)', async () => {
        const password = '1234'; //$$%#$HJAKSD123
        const result = await createHash(password);
        expect(result).to.be.not.eql(password);
    });

    it('El hasheo realizado debe poder compararse de manera efectiva con la contraseña original (la comparación debe resultar en true)', async () => {
        const password = "1234";
        const user = {
            password: await createHash(password)
        }

        const result = await passwordValidation(user, password);
        expect(result).to.be.eql(true);
    });
})