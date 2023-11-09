import passport from 'passport';
import local from 'passport-local';
import usersModel from '../models/users.model.js';
import { createHash, isValidPassword } from '../utils.js';

//local es autenticacion con usuario y contraseña
const LocalStrategy = local.Strategy;

const initializePassport = () => {
    //Implementación de nuestro registro
    passport.use('register', new LocalStrategy({
        passReqToCallback: true, //permite acceder al objeto request como cualquier otro middleware
        usernameField: 'email'
    }, async (req, username, password, done) => {
        try {
            const { first_name, last_name, age } = req.body;
            const user = await usersModel.findOne({ email: username });
            
            if(user) {
                return done(null, false);
            }

            const userToSave = {
                first_name,
                last_name,
                email: username,
                age,
                password: createHash(password)
            }

            const result = await usersModel.create(userToSave);
            return done(null, result); //req.user {first,last,age,email}
        } catch (error) {
            return done(`Incorrect credentials`)
        }
    }));
    //Implementación de nuestro login
    passport.use('login', new LocalStrategy({
        usernameField: 'email'
    }, async (username, password, done) => {
        try {
            const user = await usersModel.findOne({ email: username });

            if(!user || !isValidPassword(password, user.password)) {
                return done(null, false)
            }

            return done(null, user); //req.user

        } catch (error) {
            return done(`Incorrect credentials`)
        }
    }));

    //Serializaccion y DeSerializaccion
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser(async(id, done) => {
        const user = await usersModel.findById(id);
        done(null, user);
    })
}

export {
    initializePassport
}