import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
    phone: String,
    createDate: {
        type: Date,
        default: Date.now
    }
});

export interface Contact {
    _id?: string;
    name: string;
    email: string;
    phone: string;
    createDate: Date
}

export interface ContactUpdateOptions {
    name?: string;
    email?: string;
    phone?: string;
}

export const ContactModel = mongoose.model<Contact>('contact', contactSchema);
