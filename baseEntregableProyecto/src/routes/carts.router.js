import CartManager from '../managers/cart.manager.js';

const cartManager = new CartManager('./carrito.json')

//La ruta raíz POST / deberá crear un nuevo carrito
router.post('/', (req, res) => {
    //Objeto para almacenar nuestro carrito
    // {
    //     id: 'HJABJHASD65761457',
    //     products: [
    //         {
    //             id: 1,
    //             quantity: 1
    //         },
    //         {
    //             id: 2,
    //             quantity: 1
    //         }
    //     ]
    // }
});

//La ruta GET /:cid deberá listar los productos que pertenezcan al carrito con el parámetro cid proporcionados.

router.get('/:cid')

//La ruta POST  /:cid/product/:pid deberá agregar el producto al arreglo “products” del carrito seleccionado, agregándose como un objeto
router.post('/:cid/product/:pid', async (req, res) => {
    //Obtengo todos los carritos
    //busco en ese arreglo el carrito con el cid
    const carts = await cartManager.getAll();
    // {
    //     id: 'HJABJHASD65761457',
    //     products: [
    //         {
    //             id: 1,
    //             quantity: 1
    //         },
    //         {
    //             id: 2,
    //             quantity: 1
    //         }
    //     ]
    // }
    //tomo el arreglo de productos de ese carrito y hago un push de uun objeeto
    // {
    //     id: :pid
    // }
    const cartById = carts.find(cart => cart.id === :cid);

    //Validacion adicional en el caso de que el producto ya este en el carrito
    //Busco en el arreglo de productos de ese carrito si el producto que quiero agregar ya existe
    //Si existe debería hacer un product.quantity++
    //Si no existe debería hacer un product.quantity = 1
    const indexProductInCart = cartById.products.findIndex(product => product.id === :pid);
    if (indexProductInCart != -1) {
        cartById.products[indexProductInCart] = cartById.products[indexProductInCart].quantity++;
    } else {
        cartById.products.push({ id: 1 });   
    }
    //Guardar en el archivo
    await cartManager.save(carts);

    //Guardar en el archivo
})