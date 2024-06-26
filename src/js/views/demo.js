import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Demo = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        actions.getContacts(); // Load the contacts 
    }, []);


    return (
        <div className="container">
            <h1>Contact List</h1>
            {store.contacts.length === 0 ? (
                <p>No contacts available.</p>
            ) : (
                <ul className="list-group">
                    {store.contacts.map((contact) => (
                        <li key={contact.id} className="list-group-item d-flex justify-content-between">
                            <div>
                                <Link to={`/single/${contact.id}`}>
                                    <span>{contact.name}</span>
                                </Link>
                                <span> - {contact.phone} - {contact.email} - {contact.address}</span>
                            </div>
                            <div>
                                <Link to="/add-contact" state={{ contact }}>
                                    <button className="btn btn-success mr-2">Edit</button>
                                </Link>
                                <button className="btn btn-danger" onClick={() => actions.deleteContact(contact.id)}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
