import { useState } from 'react';
import { useLoginMutation } from '../redux/auth/authApi';
import styles from './styles.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLoginMutation();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    login({ email, password });

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Страница логина</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Войти</button>
      </form>
    </div>
  );
}