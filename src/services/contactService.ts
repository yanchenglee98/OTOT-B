import { ContactUpdateOptions } from "../models/contactModel";
import ContactRepo from "../repository/contactRepo";

const createContact =async (name:string, email:string, phone:string) => {
    console.log(`creating contact`);
    const newContact = await ContactRepo.createContact({
        name,
        email,
        phone,
        createDate: new Date(),
    });
    if (!newContact) {
        throw new Error(`Failed to create ${name} contact`);
    }
    return newContact;
};

const getAllContacts =async () => {
    console.log(`getting all contacts`);
    const retrievedContacts = await ContactRepo.getAllContacts();
    if (!retrievedContacts) {
        throw new Error(`Failed to retrieved all contacts`);
    }
    return retrievedContacts;
}

const updateContact =async (id:string, updatedContactFields: ContactUpdateOptions) => {
    console.log(`updating contact`);
    const updatedContact = await ContactRepo.updateContact(id, updatedContactFields);
    if (!updatedContact) {
        throw new Error(`Failed to update ${id}`)
    }
    return updatedContact;
};

const getContact =async (id:string) => {
    console.log(`getting contact`);
    const retrievedContact = await ContactRepo.getContact(id);
    if (!retrievedContact) {
        throw new Error(`Contact ${id} does not exist`)
    }
    return retrievedContact;
}

const deleteContact =async (id:string) => {
    console.log(`delete contact`);
    const deletedContact = await ContactRepo.deleteContact(id);
    if (!deletedContact) {
        throw new Error(`Contact ${id} does not exist`)
    }
    return deletedContact;
}

const ContactService = {
    createContact,
    getAllContacts,
    updateContact,
    getContact,
    deleteContact,
};

export {ContactService as default};
