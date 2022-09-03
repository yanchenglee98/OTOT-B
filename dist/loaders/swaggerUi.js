"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const docs_1 = __importDefault(require("../docs"));
exports.default = async (app) => {
    const options = {
        customSiteTitle: 'Contacts API',
    };
    app.use('/api/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup((0, docs_1.default)(), options));
};
//# sourceMappingURL=swaggerUi.js.map