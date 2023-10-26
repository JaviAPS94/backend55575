import mongoose from "mongoose";
import usersInfo from './Users.json' assert { type: 'json' };
import usersModel from './models/users.model.js';
import { studentsModel } from './models/students.model.js';
import { coursesModel } from './models/courses.model.js';


const environment = async () => {
    try {
        //Conexión a la BDD
        await mongoose.connect('mongodb+srv://alexpinaida55575:HHXI4o0vfaP5bUHT@cluster55575ap.f6civky.mongodb.net/clase16?retryWrites=true&w=majority');
        
        //Insertar nuestra data de prueba
        // const responseInsert = await usersModel.insertMany(usersInfo);
        // console.log(responseInsert);

        // const usersByNameStats = await usersModel.find({ first_name: 'Jose', last_name: 'Guerra' }).explain('executionStats');
        // console.log(usersByNameStats);

        // await coursesModel.insertMany([{
        //     title: "Programación backend",
        //     description: "Programación backend con node",
        //     teacher: "Alex"
        // },{
        //     title: "Programación frontend",
        //     description: "Programación frontend con react",
        //     teacher: "Juan"
        // }])

        // await studentsModel.create({
        //     first_name: "Max",
        //     last_name: 'Menvielle',
        //     email: 'mm@gmail.com',
        //     gender: 'M'
        // });

        //Asociar el curso con el estudiante
        // const student = await studentsModel.findOne({ _id: '6539ba31828b2c462a2cb115' });
        // console.log(student);
        
        // student.courses.push({ course: '6539b9bcdef4998c61aedfc5' });

        // await studentsModel.updateOne({ _id: '6539ba31828b2c462a2cb115' }, student);
        // const students = await studentsModel.find().populate('courses.course');

        const students = await studentsModel.find();
        console.log(JSON.stringify(students, null, '\t'));

    } catch (error) {
        console.log(error)
    }
}

environment();