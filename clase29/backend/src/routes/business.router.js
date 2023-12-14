import { Router } from 'express';
import { getBusiness, createBusiness } from '../controllers/business.controller.js';

const router = Router();

router.get('/', getBusiness);
router.post('/', createBusiness);

export default router;