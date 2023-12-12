import express from 'express';
import contactsRouter from './routes/contacts.router.js'
import mongoose from 'mongoose';

const app = express();

// try {
//     await mongoose.connect('mongodb+srv://alexpinaida55575:HHXI4o0vfaP5bUHT@cluster55575ap.f6civky.mongodb.net/clase28?retryWrites=true&w=majority')
// } catch (error) {
//     console.log(error.message);
// }

app.use(express.json());

app.use('/api/contacts', contactsRouter);

app.listen(8080, () => console.log('Server running'));