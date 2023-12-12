import config from '../config/config.js';

const persistence = config.persistence;

let Contacts;
let Products;

switch(persistence) {
    case 'MONGO':
        console.log('Trabajando con BDD');
        //Import dinámicos
        const mongoose = await import('mongoose');
        await mongoose.connect(config.mongoUrl);
        const { default: ContactsMongo } = await import('./mongo/contacts.mongo.js');
        Contacts = ContactsMongo;
        break;
    case 'MEMORY':
        console.log('Trabajando con memoria');
        const { default: ContactsMemory } = await import('./memory/contacts.memory.js');
        Contacts = ContactsMemory;
        break;
}

export {
    Contacts
}