import { studentsModel } from './models/students.model.js';

export default class Students {
    constructor() {
        console.log('Working students with DB');
    }

    //NO Colocar lógica de negocio

    getAll = async () => {
        //MongoDB el formato de nuestro registros son BSON
        const students = await studentsModel.find();
        // BSON -> POJO (Plain Old Javascript Object)
        return students.map(student => student.toObject());
    }

    save = async (student) => {
        const result = await studentsModel.create(student);
        return result;
    }
}