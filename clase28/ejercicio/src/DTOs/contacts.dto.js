export default class ContactsDto {
    constructor(contact) {
        this.name = `${contact.name} ${contact.lastname}`
        this.phone = contact.phone ? contact.phone.split('-').join('') : ''
    }
}

// +593-955454-54654
// +59395545454654