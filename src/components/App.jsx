import { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import ContactList from './ContactList/ContactsList';
import Filter from './Filter/Filter';
import css from './App.module.css';
import initialContacts from './assets/contacts';
import useLocalStorage from 'hooks/useLocalStorage';


export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts([...contacts, contact]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value.toLowerCase());
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const deleteContact = id => {
    // console.log('id', id);
    setContacts(state => contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList data={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}