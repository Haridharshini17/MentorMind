import React from 'react';
import { useAppContext } from './AppContext';

const LoginStatus: React.FC = () => {
  const { isLoggedIn, toggleLogin } = useAppContext();

  return (
    <div className="login-status">
      <h2>User Status</h2>
      <p>Status: {isLoggedIn ? 'Logged In ✅' : 'Logged Out ❌'}</p>
      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default LoginStatus;
