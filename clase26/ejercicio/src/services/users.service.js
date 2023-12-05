import Users from '../dao/memoryManager/users.manager.js';

const usersManager = new Users();

const getUsers = async () => {
    const users = await usersManager.getAll();
    return users;
}

const saveUser = async (user) => {
    await usersManager.save(user);
    return user;
}

export {
    getUsers,
    saveUser
}