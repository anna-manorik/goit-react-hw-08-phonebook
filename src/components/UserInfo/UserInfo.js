import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import { useLogoutMutation } from '../../redux/auth/authApi';

export default function UserMenu() {
  const userName = useSelector(authSelectors.getUserName);
  const [logout] = useLogoutMutation();

    return (
      <div>
        <span>Welcome, {userName}</span>
        <button type="button" onClick={() => logout()}>
          LogOut
        </button>
      </div>
    );
  }