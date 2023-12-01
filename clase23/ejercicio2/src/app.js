import express from 'express';
import UsersRouter from './routes/users.router.js';
import SessionsRouter from './routes/sessions.router.js';

const usersRouter = new UsersRouter();
const sessionsRouter = new SessionsRouter();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', usersRouter.getRouter());
app.use('/api/sessions', sessionsRouter.getRouter());

app.use((err, req, res, next) => {
    if(err && err.error && err.error.isJoi) {
        res.status(422).json({
            type: err.type,
            message: err.error.toString()
        })
    } else {
        next(err);
    }
})

app.listen(8080);