import {Contact, ContactModel, ContactUpdateOptions} from '../models/contactModel';

const createContact =async (contact:Contact) => {
    console.log(contact);
    const newContact = await ContactModel.create(contact);
    return newContact;
};

const getAllContacts =async () => {
    const contacts = await ContactModel.find();
    return contacts;
}

const updateContact =async (id:string, updatedContactFields: ContactUpdateOptions) => {
    const updatedContact = await ContactModel.findByIdAndUpdate(id, updatedContactFields, {
        new: true,
    }).select('-__v').lean(); // select the value and make it lean (skip hydrating)
    return updatedContact;
};

const getContact =async (id:string) => {
    const contact = await ContactModel.findById(id).select('-__v').lean();
    return contact;
};

const deleteContact =async (id:string) => {
    const deletedContact = await ContactModel.findByIdAndDelete(id).select('-__v').lean();
    return deletedContact;
};

const ContactRepo = {
    createContact,
    getAllContacts,
    updateContact,
    getContact,
    deleteContact,
};

export { ContactRepo as default };
