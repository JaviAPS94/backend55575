import mongoose from 'mongoose';

const carstsCollection = 'carts';

const cartsSchema = new mongoose.Schema({
    products: {
        type: [
            {
                product: {
                    type: mongoose.Schema.Typeese.ObjectId,
                    ref: 'products'
                },    
                quantity: {
                    type: Number,
                    default: 1
                }
            }
        ],
        default: []
    }
});

export const cartsModel = mongoose.model(carstsCollection, cartsSchema);