import mongoose from "mongoose";
import ordersModel from "./models/orders.model.js";

const environment = async () => {
    try {
        await mongoose.connect('mongodb+srv://alexpinaida55575:HHXI4o0vfaP5bUHT@cluster55575ap.f6civky.mongodb.net/clase17?retryWrites=true&w=majority');
        console.log('BDD conected');

        // const orders = [
        //     {
        //         name: "Pepperoni", size: "medium", price: 19,
        //         quantity: 10, date: "2021-03-13T08:14:30Z"
        //     },
        //     {
        //         name: "Pepperoni", size: "medium", price: 20,
        //         quantity: 20, date: "2021-03-13T09:13:24Z"
        //     },
        //     {
        //         name: "Pepperoni", size: "large", price: 21,
        //         quantity: 30, date: "2021-03-17T09:22:12Z"
        //     },
        //     {
        //         name: "Cheese", size: "small", price: 12,
        //         quantity: 15, date: "2021-03-13T11:21:39.736Z"
        //     },
        //     {
        //         name: "Cheese", size: "medium", price: 13,
        //         quantity: 50, date: "2022-01-12T21:23:13.331Z"
        //     },
        //     {
        //         name: "Cheese", size: "large", price: 14,
        //         quantity: 10, date: "2022-01-12T05:08:13Z"
        //     },
        //     {
        //         name: "Vegan", size: "small", price: 17,
        //         quantity: 10, date: "2021-01-13T05:08:13Z"
        //     },
        //     {
        //         name: "Vegan", size: "medium", price: 18,
        //         quantity: 10, date: "2021-01-13T05:10:13Z"
        //     }
        // ];

        // //Insertar los datos en nuestra BDD
        // await ordersModel.insertMany(orders);

        // const ordersResult = await ordersModel.find();
        // console.log(ordersResult);

        //Definir nuestra agregación
        const orders = await ordersModel.aggregate([
            //Va a contener los stages de nuestro pipeline
            //Vamos a definir nuestro primer stage
            //Debemos filtrar las pizzas que sean de tamaño mediano
            {
                $match: { size: 'medium' }
            },
            //El resultado del stage anterior, ees la data de entrada del siguiente stage
            //Segundo, es agrupar las pizzas por sabor para corroboar cuantos ejemplares se vendieron de dichos sabores
            {
                $group: { _id: '$name', totalQuantity: { $sum: '$quantity' } }
            },
            //Vamos a ordenar los documentos de acuerdo al atributo totalQuantity de mayor a menor
            {
                $sort: { totalQuantity: -1 }
            },
            //Vamos a agrupar nuestros documentos para tener todos los registros en un arreglo
            //para posteriorrmente cuando generemos el nuevo doocumento, estos resultados no se guarden por separado
            // {
            //     _id: 1,
            //     orders: [
            //         { _id: 'Cheese', totalQuantity: 50 },
            //         { _id: 'Pepperoni', totalQuantity: 30 },
            //         { _id: 'Vegan', totalQuantity: 10 }
            //       ]
            // }
            //ROOTT acceso a todas las propiedas de nuestro objeto
            {
                $group: { _iden: 1, orders: { $push: '$$ROOT' } }
            },
            //Vamos a aplicar una proyección, donde vamos a geenerar un nuevo documento con un nuevo ObjectId
            // {
            //     $project: {
            //         '_id': 0, //estamos especificcaando que va a generrar un ObjectId automático,
            //         orders: '$orders'
            //     }
            // },
            // //Vamos a generar nuestra nueva ccolección llamada reportes
            // {
            //     $merge: {
            //        into: 'reports' 
            //     }
            // }
        ]);

        console.log(JSON.stringify(orders, null, '\t'));
    } catch (error) {
        console.log(error);
    }
};

environment();