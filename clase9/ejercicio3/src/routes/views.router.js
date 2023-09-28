import { Router } from "express";

const router = Router();

const food = [
    {
        name: 'Pizza',
        price: 100
    },
    {
        name: 'Banana',
        price: 50
    },
    {
        name: 'Soda',
        price: 75
    },
    {
        name: 'Ensalada',
        price: 80
    },
    {
        name: 'Fruta',
        price: 90
    }
    ];

router.get('/', (req, res) => {
    const testUser = {
        name: 'Rodrigo',
        role: 'admin'
    };

    res.render('food', {
        user: testUser,
        style: 'index.css',
        isAdmin: testUser.role === 'admin',
        food
    });
});

export default router;