import mongoose from 'mongoose';

const usersCollection = 'users';

const usersSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: String,
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'orders'
        }
    ]
});

usersSchema.pre('find', function () {
    this.populate('orders');
});

const usersModel = mongoose.model(usersCollection, usersSchema);

export default usersModel;