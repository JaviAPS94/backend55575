import mongoose from 'mongoose';

const ordersCollection = 'orders';

const ordersSchema = new mongoose.Schema({
    number: Number,
    products: [],
    total_price: Number,
    status: String,
    business: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'business'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
});

ordersSchema.pre('find', function () {
    this.populate('business');
});

const ordersModel = mongoose.model(ordersCollection, ordersSchema);

export default ordersModel;