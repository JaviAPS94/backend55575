import ContactsDto from '../DTOs/contacts.dto.js';

export default class ContactsRepository {
    constructor(dao) {
        this.dao = dao;
    }

    getContacts = async() => {
        const result = await this.dao.get();
        return result;
    }

    createContact = async (contact) => {
        const contactToInsert = new ContactsDto(contact);
        const result = await this.dao.create(contactToInsert);
        return result;
    }
}

//Capa de repositorios esta centrada en manejar objetos a nivel del dominio
// {
//     name: 'asd',
//     phone: 'adsad'
// }

//Capa de acceso a los datos o nuestros daos, esta centrada en manejar objetos directos hacia la BDD
// {
//     name: String,
//     phone: String,
//     //Campos de auditoria
//     created_at,
//     updated_at
//     deleted_at
// }