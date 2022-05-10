import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UserInfo from './UserInfo/UserInfo';
import authSelectors from '../redux/auth/auth-selectors';
import styles from './appBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div className={styles.container}>
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Contacts
        </NavLink>
      </div>

      {isLoggedIn ?
        <UserInfo />
       : (<div>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Register
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Login
          </NavLink>
        </div>)}
    </div>
  );
}
