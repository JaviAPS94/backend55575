import express from 'express';
import cors from 'cors';
import './dao/dbConfig.js';
import businessRouter from './routes/business.router.js'
import ordersRouter from './routes/orders.router.js'
import usersRouter from './routes/users.router.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/users', usersRouter);
app.use('/api/business', businessRouter);
app.use('/api/orders', ordersRouter);

app.listen(8080, () => console.log('Server running'));