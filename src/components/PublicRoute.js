import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selectors';

/**
 * - Если маршрут ограниченный, и юзер залогинен, рендерит редирект на redirectTo
 * - В противном случае рендерит компонент
 *
 */

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/contacts'
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}