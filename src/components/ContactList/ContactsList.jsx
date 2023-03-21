import PropTypes from 'prop-types';
import React from 'react';
import css from './ContactList.module.css';

const ContactList = ({ data, onDelete }) => {
  return (
    <ul className={css.list}>
      {data.map(item => (
        <li key={item.id} className={css.item}>
          <span className="name">{item.name}: </span>
          <span className="number">{item.number}</span>
          <button className={css.btn} onClick={() => onDelete(item.id)}>
            {'\u00D7'}
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  data: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
