import React from 'react';
import { NavLink } from 'react-router-dom';
import UserInfo from './UserInfo/UserInfo';
import styles from './appBar.module.css';

export default function AppBar() {
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

      <div>
        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Register
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Login
        </NavLink>
      </div>

      <UserInfo />
    </div>
  );
}
