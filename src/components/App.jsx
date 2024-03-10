import React, { useState, useEffect } from 'react';
import { getUniqueId } from 'helpers/helpers';

import PhoneBook from './PhoneBook/PhoneBook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

const App = () => {
  const [phones, setPhones] = useState(() => {
    const localData = localStorage.getItem('contacts');
    return localData ? JSON.parse(localData) : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(phones));
  }, [phones]);

  const isContactExist = (name) => {
    return phones.some((it) => it.name.toLowerCase() === name.toLowerCase());
  };

  const addContact = ({ name, phone }) => {
    if (isContactExist(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    setPhones((prevState) => [
      ...prevState,
      {
        name,
        phone,
        id: getUniqueId(),
      },
    ]);
  };

  const deleteContact = (id) => {
    setPhones((prevState) => prevState.filter((it) => it.id !== id));
  };

  const getFilteredContacts = () => {
    return phones.filter((contact) => {
      return (
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.phone.includes(filter)
      );
    });
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phone Book</h1>
      <PhoneBook onSubmit={addContact} />
      <Filter setFilter={setFilter} filterValue={filter} />
      <h2>Contacts</h2>
      <Contacts
        contacts={getFilteredContacts()}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
