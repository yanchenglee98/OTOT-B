import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactList() { // function name ContactList is capitalised so it will be a react function 
    // use react hooks to manage states
    // contacts is used to manage the state of the variable
    // setContacts is a function to update contacts
    // for now it will be hard coded, TODO: pull from API 
    const [contacts, setContacts] = useState([]);
    const [newContact, setNewContact] = useState(null);
    const sampleContacts = [
        {name:'john doe', email: 'johndoe@gmail.com', number: '98765432'},
        {name:'jane doe', email: 'janedoe@gmail.com', number: '12345678'}
    ];

    // save contacts to local storage
    const saveContacts = () => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    };

    // get contacts from local storage and load it to the list
    const getContacts = () => {
        const newContacts = JSON.parse(localStorage.getItem('contacts')); // need to parse the json and convert it to an object
        if (newContacts && newContacts.length > 0) {
            setContacts(newContacts);
        } else {
            setContacts(sampleContacts);
        }
    }

    // useEffect react hook used to run some kind of side effect that we want to actually happen when out app loads
    useEffect(()=> {
        getContacts();
    }, []); // run this effect hook whenever something changes in this array else it will keep rendering

    const getContactsToRender = () => {
        return contacts.map((contact, idx) => {
            return (
                // mt-3 defines margins
                <div className="columns contact mt-3 is-vcentered"> 
                    <div className="column has-text-left">
                        <div key={idx}>
                            <div>{contact.name}</div>
                            <div>{contact.email}</div>
                            <div>{contact.number}</div>
                        </div>
                    </div>
                    <div className="column is-narrow">
                        <div className="buttons">
                            <button className="button is-success">View</button>
                            <button className="button is-danger" onClick={() => handleDeleteContact(idx)}>Delete</button>
                        </div>
                    </div>
                </div>
            );
        });
    };

    const handleDeleteContact = (idx) => {
        const newContacts = [...contacts];
        newContacts.splice(idx, 1);
        setContacts(newContacts);
    }

    const handleInputChanged = (event) => {
        setNewContact(event.target.value);
    }

    const handleAddNewContact = () => {
        const newContactList = [...contacts];
        newContactList.push({name: newContact});
        setContacts(newContactList);
    }

    // form 
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => console.log(data);

    const Form = () => {
        return (
            <form className="has-text-left" onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input 
                            className="input"
                            type="text"
                            placeholder="Name"
                            {...register("name", {required:true, maxLength:80})}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input 
                            className="input"
                            type="text"
                            placeholder="hello@mail.com"
                            {...register("email", {required:true, maxLength:80})}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Number</label>
                    <div className="control">
                        <input 
                            className="input"
                            type="text"
                            placeholder="98765432"
                            {...register("number", {required:true, maxLength:80})}
                        />
                    </div>
                </div>

                <div className="control">
                    <button className="button is-link" type="submit">
                        Submit
                    </button>
                </div>
                
            </form>
        );
    }

    return (
            <div>
                <div>{Form()}</div>
                {/* <input 
                    className="input is-primary"
                    type = "text"
                    placeholder="Primary input"
                    onChange={handleInputChanged}
                />
                <button className="button is-link mt-3 is-fullwidth" onClick={handleAddNewContact}>Add Contact</button> */}
                <hr/>
                <div className="contactList">{getContactsToRender()}</div>
            </div> // any kind of javascript or logic needs to be enclosed with curly brackets
        );
}