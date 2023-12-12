import mongoose from 'mongoose';

const contactsCollection = 'contacts';

const contactsSchema = new mongoose.Schema({
    name: String,
    phone: String,
    //Campos de auditoria
    // created_at,
    // updated_at
    // deleted_at
});

// {
//     name: 'asdasd'
//     last_name: 'asdasd',
//     phone: '894576439856'
// }

const contactsModel = mongoose.model(contactsCollection, contactsSchema);

export default contactsModel;