import { Router } from 'express';
import { getOrders, createOrder, resolveOrder } from '../controllers/orders.controller.js';

const router = Router();

router.get('/', getOrders);
router.post('/', createOrder);
router.put('/:id', resolveOrder);

export default router;