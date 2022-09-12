import bodyParser from 'body-parser';
import cors from 'cors';
import * as express from 'express';
import helmet from 'helmet';
import routes from '../routes';


export default (app: express.Application) => {
  app.enable('trust proxy');
  app.use(cors());
  app.use(helmet());
  app.use(bodyParser.json());

  app.use('/api', routes);
  // Send message for default URL
  app.get('/', (req, res) => res.send('Hello World with Express'));

  app.use((err, req, res, next) => {
    // hard coded check for contact does not exist which is supposed to return 404
    // TODO: implement NotFoundError to check for not found 
    // can reference this website: https://medium.com/learn-with-talkrise/custom-errors-with-node-express-27b91fe2d947
    if (err.message.includes("does not exist")) {
      res.status(404).send({error: err.message, stack: err.stack});
    } else {
      res.status(500).send({error: err.message, stack: err.stack});
    }
  });
};