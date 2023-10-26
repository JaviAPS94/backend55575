import mongoose from 'mongoose';

const studentsCollection = 'students';

const studentsSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dni: Number,
    birth_date: Date,
    gender: {
        type: String,
        enum: ['M','F']
    },
    courses: {
        //Vamos a definir la referencia a la colección de cursos
        type: [
            {
              course: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'courses'
              }  
            }
        ],
        default: []
    }
});
// .find()
studentsSchema.pre(['find','findOne'], function() {
    this.populate('courses.course');
});

// {
//     first_name: "Alex",
//     last_name: "Pinaida",
//     courses: [
//         {
//             course: ObjectId("ASDAJSNKD32453254345") //Baackend
//         },
//         {
//             course: "HJBSAJDFB34534253425" //Frontend
//         }
//     ]
// }

export const studentsModel = mongoose.model(studentsCollection, studentsSchema);