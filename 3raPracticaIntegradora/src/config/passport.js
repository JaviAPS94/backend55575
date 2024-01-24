import passport from "passport";
import jwt from 'passport-jwt';
import { passportStrategiesEnum } from "./enums.js";
import { PRIVATE_KEY_JWT } from "./constants.js";

const JWTSrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;

const initializePassport = () => {
    passport.use(passportStrategiesEnum.JWT, new JWTSrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: PRIVATE_KEY_JWT
    }, async(jwt_payload, done) => {
        try {
            return done(null, jwt_payload.user)//req.user
        } catch (error) {
            return done(error);
        }
    }))
};

export default initializePassport;