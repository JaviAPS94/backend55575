import mongoose from 'mongoose';

//Especificar el nombre de la colección
const usersCollection = 'users';

//Vamos a definir el schema de nuestro documento (atributos que va a tener el usuario)
const usersSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        unique: true
    }
});

//Parte funcional de nuestro modelo, es la parte para pooder interactuar con mi BDD (consultas, transacciones escritura, acctualiación o eliminación)
export const usersModel = mongoose.model(usersCollection, usersSchema);