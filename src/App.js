import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useGetCurrentUserQuery } from './redux/auth/authApi';
import AppBar from './components/AppBar';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import Register from './Pages/Register';
import Login from './Pages/Login';
import styles from './app.module.css';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  useGetCurrentUserQuery();

  return (
    <div className={styles.container}>
      <AppBar />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <PublicRoute exact path="/">
              <Home />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="/contacts"
          element={
            <PrivateRoute path="/contacts" redirectTo="/login">
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/register"
          element={
            <PublicRoute exact path="/register" restricted>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
              <Login />
            </PublicRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
