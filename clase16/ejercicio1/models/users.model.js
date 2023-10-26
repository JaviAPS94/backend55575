import mongoose from 'mongoose';

const usersCollection = 'users';

const usersSchema = new mongoose.Schema({
    first_name: {
        type: String,
    },
    last_name: String,
    email: String,
    gender: String
});

//usersSchema.index({ first_name: 1, last_name: 1 });
// usersSchema.index({ last_name: 'text' });
// usersSchema.index({ coordinates: '2d' });

const usersModel = mongoose.model(usersCollection, usersSchema);

export default usersModel;