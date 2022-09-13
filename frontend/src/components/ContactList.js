import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import ContactApi from "../api/ContactApi";
import WeatherApi from "../api/WeatherApi";

export default function ContactList() { // function name ContactList is capitalised so it will be a react function 
    // use react hooks to manage states
    // contacts is used to manage the state of the variable
    // setContacts is a function to update contacts
    // for now it will be hard coded, TODO: pull from API 
    const [contacts, setContacts] = useState([]);
    const [weather, setWeather] = useState("Sunny");
    const sampleContacts = [
        {name:'john doe', email: 'johndoe@gmail.com', phone: '98765432'},
        {name:'jane doe', email: 'janedoe@gmail.com', phone: '12345678'}
    ];
    
    // call getAllContacts API to display all contacts
    // useEffect react hook used to run some kind of side effect that we want to actually happen when our app loads
    useEffect(() => {
        ContactApi.getAllContacts()
            .then((response) => {
                if (response.data.length > 0) {
                    setContacts(response.data);
                } else {
                    setContacts(sampleContacts);
                }
            })
        if (true) { // to switch on or off getting the weather to save money on google cloud function 
            WeatherApi.getWeather()
                .then((res)=> {
                    setWeather(res.data['forecast']);
            })
        }
    }, []);// run this effect hook whenever something changes in this array else it will keep rendering
 

    const getContactsToRender = () => {
        return contacts.map((contact, idx) => {
            console.log(contact);
            return (
                // mt-3 defines margins
                <div className="columns contact mt-3 is-vcentered"> 
                    <div className="column has-text-left">
                        <div key={idx}>
                            <div>{contact.name}</div>
                            <div>{contact.email}</div>
                            <div>{contact.phone}</div>
                        </div>
                    </div>
                    <div className="column is-narrow">
                        <div className="buttons">
                            <button className="button is-danger" onClick={() => handleDeleteContact(contact, idx)}>Delete</button>
                        </div>
                    </div>
                </div>
            );
        });
    };

    // handle delete operation, will make a call to delete API
    const handleDeleteContact = (contact, idx) => {
        ContactApi.deleteContact(contact._id) // send the mongo document id to the backend for deletion 
        // update the list 
        const newContacts = [...contacts];
        newContacts.splice(idx, 1);
        setContacts(newContacts);
    }

    const handleAddNewContact = (data) => {
        ContactApi.createContact(data);
        const newContactList = [...contacts];
        newContactList.push({name: data.name, email: data.email, phone:data.phone});
        setContacts(newContactList);
    }

    // form 
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        handleAddNewContact(data);
    }

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
                            {...register("email", {required:true, maxLength:80, pattern:/^\S+@\S+$/i,})}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">phone</label>
                    <div className="control">
                        <input 
                            className="input"
                            type="text"
                            placeholder="98765432"
                            {...register("phone", {required:true, maxLength:80})}
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
                <div>Today's weather is {weather}</div>
                <div>{Form()}</div>
                <hr/>
                <div className="contactList">{getContactsToRender()}</div>
            </div> // any kind of javascript or logic needs to be enclosed with curly brackets
        );
}