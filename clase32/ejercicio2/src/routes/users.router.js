import { Router } from 'express';
import saveUser from '../controllers/users.controller.js';
import toAsyncRouter from 'async-express-decorator';

const router = toAsyncRouter(Router());

router.post('/', saveUser);

export default router;