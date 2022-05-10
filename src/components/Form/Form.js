import React, { useState } from 'react';
import Notiflix from 'notiflix';
import styles from './form.module.css';
import { useGetContactsQuery, useAddContactMutation } from '../../redux/phonebook/phonebookApi';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();
  

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.log('any results');
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const checkname = data.find(contact =>
      contact.name
        .toLowerCase()
        .includes(e.currentTarget.elements.name.value.toLowerCase())
    );

    if (!checkname) {
      addContact({ name, number });
      Notiflix.Notify.success('Contact was ADDED succesfully');
      resetForm();

      e.currentTarget.elements.name.value = '';
      e.currentTarget.elements.number.value = '';
    } else {
      Notiflix.Notify.failure(e.currentTarget.elements.name.value + ' is already in contact list');
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Phone num:
        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
};

export default Form;
