import ProductManager from '../managers/product.manager.js';

const productManager = new ProductManager('./productos.json')

// La ruta raíz GET / deberá listar todos los productos de la base. (Incluyendo la limitación ?limit del desafío anterior
router.get('/', async (req, res) => {
    const limit = req.query;
    const products = await productManager.getAll();
    //Tengo el arreglo y si me llega el limit, tomo esos primeros elementos del arreglo
    res.send({ status: sucess, payload: products });
})

//La ruta GET /:pid deberá traer sólo el producto con el id proporcionado
router.get('/:pid')

// La ruta raíz POST / deberá agregar un nuevo producto 
router.post('/', (req, res) => {
    if(!title || !desciption || asdad)
})

//La ruta PUT /:pid deberá tomar un producto y actualizarlo
router.put('/:pid')

//La ruta DELETE /:pid deberá eliminar el producto con el pid indicado.
router.delete('/:pid')