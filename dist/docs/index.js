"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const info_1 = __importDefault(require("./info"));
const servers_1 = __importDefault(require("./servers"));
const contacts_1 = __importDefault(require("./contacts"));
exports.default = () => {
    return {
        openapi: '3.0.3',
        info: (0, info_1.default)(),
        servers: (0, servers_1.default)(),
        paths: {
            '/contacts': {
                post: contacts_1.default.post(),
            },
            '/contacts/{id}': {
                get: contacts_1.default.get(),
                patch: contacts_1.default.patch(),
                delete: contacts_1.default.del(),
            },
        },
    };
};
//# sourceMappingURL=index.js.map