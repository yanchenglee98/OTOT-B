"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config"));
const connect = async () => {
    const dbUrl = config_1.default.database.url;
    try {
        await mongoose_1.default.connect(dbUrl);
        console.log(`connected to MongoDB at ${dbUrl}`);
    }
    catch (err) {
        console.log(`cannot connect to MongoDB at ${dbUrl}`, err);
    }
};
const database = {
    connect,
};
exports.default = database;
//# sourceMappingURL=database.js.map