import { Request, Response, Router} from 'express';
import ContactService from '../../services/contactService';
import wrap from 'express-async-handler';

const route = Router();

export default(app: Router) => {
    app.use('/contacts', route);

    // create
    route.post(
        '/',
        wrap(async (req:Request, res:Response) => {
            const {name, email, phone} = req.body;
            const newContact = await ContactService.createContact(name, email, phone);
            res.json(newContact).status(200);
        }),
    );
    
    // get all 
    route.get(
        '/',
        wrap(async(req:Request, res:Response) => {
            const retrievedContacts = await ContactService.getAllContacts();
            res.json(retrievedContacts).status(200);
        })
    )

    // retrieve
    route.get(
        '/:id',
        wrap(async(req:Request, res:Response) => {
            const {id} = req.params;
            const retrievedContact = await ContactService.getContact(id);
            res.json(retrievedContact).status(200);
        }),
    );

    // update 
    route.patch(
        '/:id',
        wrap(async(req:Request, res:Response) => {
            const {id} = req.params;
            const updatedContactFields = req.body;
            const updatedContact = await ContactService.updateContact(id, updatedContactFields);
            res.json(updatedContact).status(200);
        }),
    );

    // delete
    route.delete(
        '/:id',
        wrap(async(req:Request, res:Response) => {
            const {id} = req.params;
            const deletedContact = await ContactService.deleteContact(id);
            res.json(deletedContact).status(200);
        })
    );
};
