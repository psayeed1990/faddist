import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { UserContext } from '../UserContext';

const Dashboard = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Typography variant="h1">I am dashboard</Typography>
      <Typography variant="h1">{JSON.stringify(user, null, 2)}</Typography>
    </div>
  );
};

export default Dashboard;
