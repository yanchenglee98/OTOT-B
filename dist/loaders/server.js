"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const routes_1 = __importDefault(require("../routes"));
exports.default = (app) => {
    app.enable('trust proxy');
    app.use((0, cors_1.default)());
    app.use((0, helmet_1.default)());
    app.use(body_parser_1.default.json());
    app.use('/api', routes_1.default);
    // Send message for default URL
    app.get('/', (req, res) => res.send('Hello World with Express'));
    app.use((err, req, res, next) => {
        res.status(500).send({ error: err.message, stack: err.stack });
    });
};
//# sourceMappingURL=server.js.map