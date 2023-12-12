import contactsModel from "./models/contacts.model.js";

export default class Contacts {
    constructor(){}

    //CRUD

    //READ
    get = async() => {
        return await contactsModel.find();
    }

    //CREATE
    create = async(contact) => {
        return await contactsModel.create(contact);
    }

    //UPDATE
    modify = async(id, contact) => {
        return await contactsModel.findByIdAndUpdate(id, contact);
    }

    //DELETE
    delete = async(id) => {
        return await contactsModel.findByIdAndDelete(id);
    }
}