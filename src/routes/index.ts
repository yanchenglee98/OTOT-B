import {Router} from 'express';
import contacts from './contacts';

const router = Router();
contacts(router);

export default router