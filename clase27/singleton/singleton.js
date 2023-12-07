import mongoose from 'mongoose';

export default class MongoSingleton {
    static #instance;

    constructor() {
        mongoose.connect('mongodb+srv://alexpinaida55575:HHXI4o0vfaP5bUHT@cluster55575ap.f6civky.mongodb.net/practicaIntegradora?retryWrites=true&w=majority')
    }

    static getInstance() {
        //Si la instancia de la clase no existe la creamos
        //caso contrario deberíamos reutilizar la instancia de clase
        if(this.#instance) {
            console.log('La conexion ya existe');
            return this.#instance;
        }

        console.log('La conexion no existe, se crea una nueva');
        this.#instance = new MongoSingleton();
        return this.#instance;
    }
}