"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const contactRepo_1 = __importDefault(require("../repository/contactRepo"));
const createContact = async (name, email, phone) => {
    console.log(`creating ${name} contact`);
    const newContact = await contactRepo_1.default.createContact({
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
const getAllContacts = async () => {
    console.log(`getting all contacts`);
    const retrievedContacts = await contactRepo_1.default.getAllContacts();
    if (!retrievedContacts) {
        throw new Error(`Failed to retrieve all contacts`);
    }
    return retrievedContacts;
};
const updateContact = async (id, updatedContactFields) => {
    console.log(`updating ${id} contact`);
    const updatedContact = await contactRepo_1.default.updateContact(id, updatedContactFields);
    if (!updatedContact) {
        throw new Error(`Failed to update ${id}`);
    }
    console.log(`updated ${updatedContact.name} contact`);
    return updatedContact;
};
const getContact = async (id) => {
    console.log(`getting contact`);
    const retrievedContact = await contactRepo_1.default.getContact(id);
    if (!retrievedContact) {
        throw new Error(`Contact ${id} does not exist`);
    }
    console.log(`retrieved ${retrievedContact.name} contact`);
    return retrievedContact;
};
const deleteContact = async (id) => {
    console.log(`deleting contact`);
    const deletedContact = await contactRepo_1.default.deleteContact(id);
    if (!deletedContact) {
        throw new Error(`Contact ${id} does not exist`);
    }
    console.log(`deleted ${deletedContact.name} contact`);
    return deletedContact;
};
const ContactService = {
    createContact,
    getAllContacts,
    updateContact,
    getContact,
    deleteContact,
};
exports.default = ContactService;
//# sourceMappingURL=contactService.js.map