"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const contactModel_1 = require("../models/contactModel");
const createContact = async (contact) => {
    console.log(contact);
    const newContact = await contactModel_1.ContactModel.create(contact);
    return newContact;
};
const getAllContacts = async () => {
    const contacts = await contactModel_1.ContactModel.find();
    return contacts;
};
const updateContact = async (id, updatedContactFields) => {
    const updatedContact = await contactModel_1.ContactModel.findByIdAndUpdate(id, updatedContactFields, {
        new: true,
    }).select('-__v').lean(); // select the value and make it lean (skip hydrating)
    return updatedContact;
};
const getContact = async (id) => {
    const contact = await contactModel_1.ContactModel.findById(id).select('-__v').lean();
    return contact;
};
const deleteContact = async (id) => {
    const deletedContact = await contactModel_1.ContactModel.findByIdAndDelete(id).select('-__v').lean();
    return deletedContact;
};
const ContactRepo = {
    createContact,
    getAllContacts,
    updateContact,
    getContact,
    deleteContact,
};
exports.default = ContactRepo;
//# sourceMappingURL=contactRepo.js.map