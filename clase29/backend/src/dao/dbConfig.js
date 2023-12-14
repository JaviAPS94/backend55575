import mongoose from 'mongoose';
import config from '../config/config.js';

try {
    await mongoose.connect(config.mongoUrl);
    console.log('BDD connected');
} catch (error) {
    console.log(error)
}