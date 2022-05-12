import React from 'react';
import Notiflix from 'notiflix';
import NameItem from '../NameItem/NameItem';
import styles from './nameList.module.css';
import {
  useGetContactsQuery,
  useDeleteContactMutation
} from '../../redux/phonebook/phonebookApi';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from '../../redux/phonebook/phonebook-selectors';
import authSelectors from '../../redux/auth/auth-selectors';


const NameList = () => {
  const { data: contacts, isFetching } = useGetContactsQuery();
  const filterValue = useSelector(state => state.filterReducer);
  const [deleteContact] = useDeleteContactMutation();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const visibleContacts = getVisibleContacts(contacts, filterValue);

  return (
    <ul className={styles.list}>
      {isFetching && <b>Loading...</b>}
      {visibleContacts && isLoggedIn &&
        visibleContacts.map(({ id, name, number }) => (
          <NameItem
            id={id}
            name={name}
            number={number}
            onDeleteContact={() => {
              deleteContact(id);
              Notiflix.Notify.success('Contact was DELETED succesfully');
            }}
          />
        ))}
    </ul>
  );
};

export default NameList;
