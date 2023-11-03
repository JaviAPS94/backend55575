import { Router } from 'express';
import Courses from '../dao/dbManagers/courses.manager.js';

const router = Router();
const coursesManager = new Courses();

router.delete('/:cid/products/:pid', async(req, res) => {
    try {
        const { cid, pid } = req.params;
        //Primera forma es hacer la eliminación trrabajando directamente en BDD
        await cartsManager.deleteProduct(cid, pid);
        //La otra forma es trabajarlo a nivel de código o usando js
        //1.- Voy al manager de carritos y obtengo el carrito por id (cid)
        // {
        //     id: "adbcfrt",
        //     products: [
        //         {
        //             product: "123asdads",
        //             quantity: 5
        //         }
        //     ]
        // }
        // car.products = [
            //         {
            //             product: "123asdads",
            //             quantity: 5
            //         }
            //     ]
        //2.- Y tengo el carrito y por ende tbm tengo el arreglo de productos
        // const cart = await cartsManager.getById(id);
        // cart.products
        // cart.products bucar el índice del producto que quiero eleminar pid
        // procedo a eliminar el producto del arreglo, slice

        // paso final actualizar el carrito updateCart({id}, {cart})
        // {
        //     id: "adbcfrt",
        //     products: []
        // }
        res.send({ status: 'success', payload: result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
});

export default router;