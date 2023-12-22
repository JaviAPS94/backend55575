const purchase = async (cid, user) => {
    //Transacciones
    const session = await mongoose.startSession();
    session.startTransaction();

    //En este punto antes de hacer purchase yo ya tengo un carrito con productso agregados

    //1. Debería obtener el carrito por cid, el repository de carts para buscar el carrito por id
    // {
    //     products: [
    //         {
    //             product: {
    //                 id
    //                 name: 
    //                 description:
    //                 price,
    //                 stock: 2
    //             },
    //             quantity: 2
    //         },
    //         {
    //             product: {
    //                 id
    //                 name: 
    //                 description:
    //                 price:
    //                 stock: 5
    //             },
    //             quantity: 1
    //         }
    //     ]
    // }
    //2.- Iterar el arreglo de productos que forman parte de mi carrito
    let amount = 0;

    //En este arreglo vamos a ir almacenando los productos que no tenemos stock
    const outStock = [];

    cart.products.forEach(async ({ product, quantity }) => {
        if(product.stock >= quantity) {
            amount += product.price * quantity;
            product.stock -= quantity;
            // Utilizar el repostiory de productos y actualizar el producto con el stock correspondiente
            await productsReposity.updateById('Id del producto', product)
        } else {
            outStock.push({ product, quantity });
        }
    });

    const ticket = await ticketsService.generatePurchase(user, amount);
    //actulizar el carrito con el nuevo arreglo de productos que no pudieron comprarse
    //utilizar el repository de carritos para poder actualizar los productos
    await cartsRepository.updateProducts(cid, outStock);

    await session.commitTransaction();

    //catch
    await session.abortTransaction();
    //finally
    session.endSession();
}