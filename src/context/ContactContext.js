import React, { createContext, useState } from 'react';

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState([
        { id: '1', name: 'John Doe' },
        { id: '2', name: 'Jane Smith' },
    ]);

    const addContact = (contact) => {
        setContacts([...contacts, contact]);
    };

    const removeContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    return (
        <ContactContext.Provider value={{ contacts, addContact, removeContact }}>
            {children}
        </ContactContext.Provider>
    );
};
