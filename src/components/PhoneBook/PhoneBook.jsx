import React, { useState } from 'react';

import css from './PhoneBook.module.scss';

const PhoneBook = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const isFormEmpty = () => {
    return !name || !number;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormEmpty()) {
      alert('All fields must be filled!');
      return;
    }

    onSubmit({ name, phone: number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Enter name:{' '}
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <label className={css.label}>
        Enter phone number:{' '}
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default PhoneBook;
