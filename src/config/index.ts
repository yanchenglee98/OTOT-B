import * as dotenv from 'dotenv';

const env = dotenv.config();

if (!env) {
    throw new Error("env file missing");
}

export default {
    port: parseInt(process.env.PORT) || 3000,

    database: {
        url: "mongodb+srv://admin:admin@contacts.l4tk4kb.mongodb.net/?retryWrites=true&w=majority",
    },
};