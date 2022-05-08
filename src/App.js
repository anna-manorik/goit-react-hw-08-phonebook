import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import Register from './Pages/Register';
import Login from './Pages/Login';
import styles from './app.module.css';

function App() {
  return (
    <div className={styles.container}>
      <AppBar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contacts" element={<Contacts />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
