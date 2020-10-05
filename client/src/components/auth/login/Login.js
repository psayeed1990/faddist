import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { UserContext } from '../../UserContext';
import { login } from './../../../utils/login';

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <Typography variant="h1">I am private</Typography>
      <Typography variant="h1">{JSON.stringify(user, null, 2)}</Typography>
      {user ? (
        <button
          onClick={() => {
            setUser(null);
          }}
        >
          {' '}
          Logout{' '}
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Login;
