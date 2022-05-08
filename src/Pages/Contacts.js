import React from 'react';
import Form from '../components/Form/Form';
import Filter from '../components/Filter/Filter';
import NameList from '../components/NameList/NameList';

export default function Contacts() {
  return (
    <>
      <h1>Phonebook</h1>
      <Form />

      <h2>Contacts</h2>
      <Filter />
      <NameList />
    </>
  );
}
