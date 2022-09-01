import contactService from '../src/services/contactService';

const CONTACT1 = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    phone: '98765432',
};

jest.mock('../src/repository/contactRepo', () => {
    const mockCreate = () => {
        return Promise.resolve({
            _id:'1',
            name: CONTACT1.name,
            email: CONTACT1.email,
            phone: CONTACT1.phone,
        });
    };
    const mockGetAll = () => {
        return Promise.resolve({
            _id:'1',
            name: CONTACT1.name,
            email: CONTACT1.email,
            phone: CONTACT1.phone,
        });
    }
    const mockUpdate = (id:string) => {
        if (id=='1') {
            return Promise.resolve({
                _id:'1',
                name: CONTACT1.name,
                email: 'johndoe@hotmail.com',
                phone: '12345678',
            });
        } else {
            return Promise.resolve(null);
        }
    };
    const mockGet = (id:string) => {
        if (id=='1') {
            return Promise.resolve({
                _id:'1',
                name: CONTACT1.name,
                email: CONTACT1.email,
                phone: CONTACT1.phone,
            });
        } else {
            return Promise.resolve(null);
        }
    };
    return {
        createContact: jest.fn(mockCreate),
        getAllContacts: jest.fn(mockGetAll),
        updateContact: jest.fn(mockUpdate),
        getContact: jest.fn(mockGet),
        deleteContact: jest.fn(mockGet), // use the same as get since it delete returns the deleted entry
    };
});

// test create
describe('create', ()=> {
    it ('create contact',async () => {
        const contact = await contactService.createContact(
            CONTACT1.name,
            CONTACT1.email,
            CONTACT1.phone,
        );
        expect(contact.name).toBe(CONTACT1.name);
        expect(contact.email).toBe(CONTACT1.email);
        expect(contact.phone).toBe(CONTACT1.phone);
    })
})

// test retrieve
describe('retrieve', ()=> {
    it ('retrieve contact',async () => {
        const contact = await contactService.getContact('1');
        expect(contact.name).toBe(CONTACT1.name);
        expect(contact.email).toBe(CONTACT1.email);
        expect(contact.phone).toBe(CONTACT1.phone);
    })
})

// test update
describe('update', ()=> {
    it ('update contact',async () => {
        const contact = await contactService.updateContact('1', {
            email: 'johndoe@hotmail.com',
            phone: '12345678',
        });
        expect(contact.name).toBe(CONTACT1.name);
        expect(contact.email).toBe('johndoe@hotmail.com');
        expect(contact.phone).toBe('12345678');
    })
})

// test delete
describe('delete', ()=> {
    it ('delete contact',async () => {
        const contact = await contactService.deleteContact('1');
        expect(contact.name).toBe(CONTACT1.name);
        expect(contact.email).toBe(CONTACT1.email);
        expect(contact.phone).toBe(CONTACT1.phone);
    })
})
