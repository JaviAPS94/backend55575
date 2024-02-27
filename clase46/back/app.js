import express from 'express';
import cors from 'cors';
import paymentsRouter from './routes/payments.router.js';

const app = express();

app.use(cors());
app.use('/api/payments', paymentsRouter);

app.listen(8080, () => console.log('Server running'));