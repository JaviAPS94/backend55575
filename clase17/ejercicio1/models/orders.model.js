import mongoose from 'mongoose';

const ordersCollection = 'orders';

const ordersSchema = new mongoose.Schema({
    name: String,
    size: {
        type: String,
        enum: ['small','medium','large'],
        default: 'medium'
    },
    price: Number,
    quantity: Number,
    date: Date
});

const ordersModel = mongoose.model(ordersCollection, ordersSchema);

export default ordersModel;