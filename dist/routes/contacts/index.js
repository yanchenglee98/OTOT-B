"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactService_1 = __importDefault(require("../../services/contactService"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const route = (0, express_1.Router)();
exports.default = (app) => {
    app.use('/contacts', route);
    // create
    route.post('/', (0, express_async_handler_1.default)(async (req, res) => {
        const { name, email, phone } = req.body;
        const newContact = await contactService_1.default.createContact(name, email, phone);
        res.json(newContact).status(200);
    }));
    // get all 
    route.get('/', (0, express_async_handler_1.default)(async (req, res) => {
        const retrievedContacts = await contactService_1.default.getAllContacts();
        res.json(retrievedContacts).status(200);
    }));
    // retrieve
    route.get('/:id', (0, express_async_handler_1.default)(async (req, res) => {
        const { id } = req.params;
        const retrievedContact = await contactService_1.default.getContact(id);
        res.json(retrievedContact).status(200);
    }));
    // update 
    route.patch('/:id', (0, express_async_handler_1.default)(async (req, res) => {
        const { id } = req.params;
        const updatedContactFields = req.body;
        const updatedContact = await contactService_1.default.updateContact(id, updatedContactFields);
        res.json(updatedContact).status(200);
    }));
    // delete
    route.delete('/:id', (0, express_async_handler_1.default)(async (req, res) => {
        const { id } = req.params;
        const deletedContact = await contactService_1.default.deleteContact(id);
        res.json(deletedContact).status(200);
    }));
};
//# sourceMappingURL=index.js.map