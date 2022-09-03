"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./database"));
const server_1 = __importDefault(require("./server"));
const swaggerUi_1 = __importDefault(require("./swaggerUi"));
exports.default = async (app) => {
    await database_1.default.connect();
    await (0, swaggerUi_1.default)(app);
    (0, server_1.default)(app);
};
//# sourceMappingURL=index.js.map