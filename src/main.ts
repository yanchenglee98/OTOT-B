import * as express from 'express';
import config from './config';
import loaders from './loaders';

const main =async () => {
    const app = express.default();
    await loaders(app)

    app.listen(config.port, () => {
        console.log("Listening on port " + config.port);
    });
}

main();
