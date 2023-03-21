// import PropTypes from 'prop-types';
// import React, { Component } from 'react';
import { useState } from 'react';
// import { nanoid } from 'nanoid';
import css from './Form.module.css';

export default function Form({ onSubmit, contacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
   
  const handleChange = event => {
	const { name, value } = event.target;

    switch (name) {
		case 'name':
			setName(value);
			break;
		case 'number':
			setNumber(value);
			break;
		default:
			return;
	 }
  };

 	const handleSubmit = event => {
	    event.preventDefault();
	
	    const check = contacts.find(contact => contact.name === name);
	    if (check) {
	      alert(`${name} is already in contacts`);
	    } else {
	      onSubmit({name, number});
	    }
		// onSubmit({name, number});
	
	    reset();
	  };
	
	  const reset = () => {
	    setName('');
		 setNumber('');
	  };

 
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor={name}>Name</label>
      <input
        type="text"
        name="name"
        value={name}
        id={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label htmlFor={number}>Number</label>
      <input
        type="tel"
        name="number"
        value={number}
        id={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
}

// class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameInputId = nanoid();
//   numberInputId = nanoid();

//   handleChange = e => {
//     const { name, value } = e.currentTarget;

//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     const { contacts } = this.props;
//     const check = contacts.find(contact => contact.name === this.state.name);
//     if (check) {
//       alert(`${this.state.name} is already in contacts`);
//     } else {
//       this.props.onSubmit(this.state);
//     }

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className={css.form}>
//         <label htmlFor={this.nameInputId}>Name</label>
//         <input
//           type="text"
//           name="name"
//           value={this.state.name}
//           id={this.nameInputId}
//           onChange={this.handleChange}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />

//         <label htmlFor={this.numberInputId}>Number</label>
//         <input
//           type="tel"
//           name="number"
//           value={this.state.number}
//           id={this.numberInputId}
//           onChange={this.handleChange}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//         <button type="submit" className={css.btn}>Add contact</button>
//       </form>
//     );
//   }
// }

// Form.propTypes = {
// 	contacts: PropTypes.array.isRequired,
// 	onSubmit: PropTypes.func.isRequired,
//  };

// export default Form;
