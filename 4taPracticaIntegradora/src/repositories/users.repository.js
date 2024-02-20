// Tenemos acceso a nuestros datos a nivel de BDD, es que en esta capa podemos aplicar transformaciones de nuestros datos
// que podemos aplicar nuestro patrón DTO
export default class UsersRepository {
    constructor(dao) {
        this.dao = dao;
    }

    getByEmail = async (email) => {
        const user = await this.dao.getByEmail(email);
        return user;
    }

    save = async (user) => {
        const result = await this.dao.save(user);
        return result;
    }
}