import OrdersRepository from '../repositories/orders.repository.js';
import UsersRepository from '../repositories/users.repository.js';

const ordersRepository = new OrdersRepository();
const usersRepository = new UsersRepository();

const createOrder = async (user, business, products) => {
    // {
    //     name: 'coder',
    //     products: [{
    //         id: 1,
    //         price: 20
    //     },
    //     {
    //         id: 2,
    //         price: 50
    //     }]
    // }

    // {
    //     number: 3434234,
    //     business,
    //     user,
    //     status: 'PENDING',
    //     products: [2,4,5],
    //     total_price: 50
    // }

    //Vamos a buscar los productos que si forman parte de x negocio
    const currentProducts = business.products.filter((product) => 
        products.includes(product.id)
    );

    const totalPrice = currentProducts.reduce((acc, prev) => {
        acc += prev.price;
        return acc;
    }, 0);

    const orderNumber = Date.now() + Math.floor(Math.random() * 100000 + 1);

    const order = {
        number: orderNumber,
        business: business._id,
        user: user._id,
        status: 'PENDING',
        products: currentProducts.map((product) => product.id),
        total_price: totalPrice
    };

    const orderResult = await ordersRepository.createOrder(order);

    user.orders.push(orderResult._id);

    await usersRepository.updateUser(user._id, user);

    return orderResult;
}

const getOrders = async() => {
    const result = await ordersRepository.getOrders();
    return result;
}

const getOrderById = async(id) => {
    const result = await ordersRepository.getOrderById(id);
    return result;
}

const resolveOrder = async(order, status) => {
    //Lógica de negocio es modificar el estado de la orden
    order.status = status;
    await ordersRepository.resolveOrder(order);
    return result;
}

export {
    getOrders,
    getOrderById,
    resolveOrder,
    createOrder
}