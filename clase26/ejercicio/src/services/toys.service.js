import Toys from '../dao/memoryManager/toys.manager.js';

const toysManager = new Toys();

const getToys = async () => {
    //Para agregar un producto al carrito debemos validar el stock del mismo
    //
    //
    //
    //

    //Requirimiento: retornar los juguetes ordenados de mayor a menor según el precio
    //Obtengo la data de BDD, -> capa de persistencia
    const toys = await toysManager.getAll();
    //Tengo listo la data
    //Debería implementar el algoritmo que me permita ordenar de acuerdo al precio
    //
    //
    //
    //
    return toys;

    //Crear el purchase order
    //Envio de correo con los productos que acabamos de comprar
}

const saveToy = async (toy) => {
    await toysManager.save(toy);
    return toy;
}

export {
    saveToy,
    getToys
}