import { Router } from 'express';
import { Contacts } from '../dao/factory.js';
import ContactsDto from '../DTOs/contacts.dto.js';
import ContactsRepository from '../repositories/contacts.repository.js';

const router = Router();
const contactsDao = new Contacts();
const contactsRepository = new ContactsRepository(contactsDao);

router.get('/', async (req, res) => {
    const data = await contactsRepository.getContacts();
    res.json(data);
});

router.post('/', async (req, res) => {
    const { name, phone, lastname } = req.body;
    //Aplico mi patron dto
    // {name, phone, lastname} -> {name: name lastname, phone}

    // const contact = new ContactsDto({ name, lastname, phone });

    const data = await contactsRepository.createContact({ name, lastname, phone });
    //DTO
    // { name, phone, created_at, updated_at, deleted_at } => { name, phone}
    res.json(data);
})

export default router;