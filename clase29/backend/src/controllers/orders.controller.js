import * as ordersService from '../services/orders.service.js';
import * as usersService from '../services/users.service.js';
import * as businessService from '../services/business.service.js';

const getOrders = async (req, res) => {
    try {
        //Necesito un método que me permita obtener el listado de ordenes
        const result = await ordersService.getOrders();
        res.send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
}

const createOrder = async (req, res) => {
    try {
        // {
        //     user: 'id del usuario de mongdb',
        //     business: 'id del negocio de mongodb',
        //     products: [1, 2, 3]
        // }
        console.log(req.body);
        const { user, business, products } = req.body;

        //validamos que el usuario que esta tratando de crear la orden existe en BDD
        //Deberíamos implementar un método para oteber el usuario por id

        const userResult = await usersService.getUserById(user);

        if(!userResult) {
            return res.status(404).send({ status: 'error', message: 'user not found' });
        }

        //validamos que el negocio que esta tratando de asignar la orden existe en BDD
        //Deberíamos implementar un método para obtener el negocio por id

        const businessResult = await businessService.getBusinessById(business);

        if(!businessResult) {
            return res.status(404).send({ status: 'error', message: 'business not found' });
        }

        //Deberíamos tener la implementación del método que me permite crear una orden
        const result = await ordersService.createOrder(userResult, businessResult, products);

        res.status(201).send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
}

const resolveOrder = async (req, res) => {
    try {
        const { status } = req.body;
        const { id } = req.params;

        //validamos que la orden que queremos cambiar el estado existe en BDD
        //Deberíamos implementar un método para obtener la orden por id

        const orderResult = await ordersService.getOrderById(id);

        if(!orderResult) {
            return res.status(404).send({ status: 'error', message: 'order not found' });
        }

        //Deberíamos implementar un método para resolver la orden
        const result = await ordersService.resolveOrder(orderResult, status);

        res.send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
}

export {
    getOrders,
    createOrder,
    resolveOrder
}