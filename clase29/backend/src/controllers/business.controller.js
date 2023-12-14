import * as businessService from '../services/business.service.js';

const getBusiness = async (req, res) => {
    try {
        //Necesito un método que me permita obtener el listado de negocios
        const result = await businessService.getBusiness();
        res.send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
}

const createBusiness = async (req, res) => {
    try {
        console.log(req)
        const business = req.body;
        //Debería tener un método que me permita guardar el negocio
        console.log(business);
        const result = await businessService.createBusiness(business);
        res.status(201).send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
}

export {
    getBusiness,
    createBusiness
}