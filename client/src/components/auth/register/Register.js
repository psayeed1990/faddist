import React, { useContext, useState } from 'react';
import { useForm } from './../../../utils/useForm';
import { UserContext } from './../../UserContext';
import { Typography } from '@material-ui/core';

const Register = () => {
  const { user, setUser } = useContext(UserContext);

  const [values, handleChange] = useForm({ name: '', email: '', password: '' });

  return (
    <div>
      {user ? (
        <Typography variant="body1">
          Already registered and logged in
        </Typography>
      ) : (
        <form>
          <input
            name="name"
            type="text"
            placeholder="name"
            value={values.name}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={values.password}
            onChange={handleChange}
          />
        </form>
      )}
    </div>
  );
};

export default Register;
