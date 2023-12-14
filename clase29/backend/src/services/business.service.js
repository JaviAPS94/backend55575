import BusinessRepository from '../repositories/business.repository.js';

const businessRepository = new BusinessRepository();

const getBusiness = async() => {
    const result = await businessRepository.getBusiness();
    //Lógica de negocio
    //Implementar el algoritmo que me permita ordenar los negocioas de acuerdo a la distancia
    return result;
}

const getBusinessById = async(id) => {
    const result = await businessRepository.getBusinessById(id);
    return result;
}

const createBusiness = async(business) => {
    const result = await businessRepository.createBusiness(business);
    return result;
}

export {
    getBusiness,
    getBusinessById,
    createBusiness
}