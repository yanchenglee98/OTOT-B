import { ContactUpdateOptions } from "../models/contactModel";
import ContactRepo from "../repository/contactRepo";
import { Exception } from "../exceptions";

const createContact =async (name:string, email:string, phone:string) => {
    console.log(`creating ${name} contact`);
    
    if (!name || !email || !phone) {
        throw new Exception('Bad request, missing parameters', 400);
    } 

    const newContact = await ContactRepo.createContact({
        name,
        email,
        phone,
        createDate: new Date(),
    });
    if (!newContact) {
        throw new Exception(`Failed to create ${name} contact`, 400);
    }
    return newContact;
};

const getAllContacts =async () => {
    console.log(`getting all contacts`);
    const retrievedContacts = await ContactRepo.getAllContacts();
    if (!retrievedContacts) {
        throw new Exception(`Failed to retrieve all contacts`, 404);
    }
    return retrievedContacts;
}

const updateContact =async (id:string, updatedContactFields: ContactUpdateOptions) => {
    console.log(`updating ${id} contact`);
    const updatedContact = await ContactRepo.updateContact(id, updatedContactFields);
    if (!updatedContact) {
        throw new Exception(`Failed to update ${id}`, 404);
    }
    console.log(`updated ${updatedContact.name} contact`)
    return updatedContact;
};

const getContact =async (id:string) => {
    console.log(`getting contact`);
    const retrievedContact = await ContactRepo.getContact(id);
    if (!retrievedContact) {
        throw new Exception(`Contact ${id} does not exist`, 404);
    }
    console.log(`retrieved ${retrievedContact.name} contact`)
    return retrievedContact;
}

const deleteContact =async (id:string) => {
    console.log(`deleting contact`);
    const deletedContact = await ContactRepo.deleteContact(id);
    if (!deletedContact) {
        throw new Exception(`Contact ${id} does not exist`, 404);
    }
    console.log(`deleted ${deletedContact.name} contact`)
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
