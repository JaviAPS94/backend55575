import { Router } from 'express';

const router = Router();

router.get('/products', async (req, res) => {
    const products = {
        docs: [{
            id: 1,
            title: 'test1',
            description: 'test1'
        },
        {
            id: 2,
            title: 'test2',
            description: 'test2'
        },
        {
            id: 3,
            title: 'test3',
            description: 'test3'
        }]
    }
    res.render('products', products);
});

export default router;