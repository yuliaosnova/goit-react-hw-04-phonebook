import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import ContactList from './ContactList/ContactsList';
import Filter from './Filter/Filter';
import css from './App.module.css';
import initialContacts from './assets/contacts'

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };


  deleteContact = id => {
	// console.log('id', id);
	this.setState(prevState => ({
	  contacts: prevState.contacts.filter(contact => contact.id !== id),
	}));
 };


  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} contacts={this.state.contacts} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList data={filteredContacts} onDelete={this.deleteContact} />
      </div>
    );
  }
}

export default App;
