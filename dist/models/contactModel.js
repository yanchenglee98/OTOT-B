"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const contactSchema = new mongoose_1.default.Schema({
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
exports.ContactModel = mongoose_1.default.model('contact', contactSchema);
//# sourceMappingURL=contactModel.js.map