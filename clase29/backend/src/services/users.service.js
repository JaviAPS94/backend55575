import UsersRepository from '../repositories/users.repository.js';

const usersRepository = new UsersRepository();

const getUsers = async() => {
    const result = await usersRepository.getUsers();
    //Lógica de negocio
    //Implementar la lógica para ordenar los usuarios de manera alfabética
    return result;
}

const getUserById = async(id) => {
    const result = await usersRepository.getUserById(id);
    return result;
}

const createUser = async(user) => {
    const result = await usersRepository.createUser(user);
    return result;
}

export {
    getUserById,
    getUsers,
    createUser
}