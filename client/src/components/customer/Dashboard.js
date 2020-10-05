import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { UserContext } from '../UserContext';

const Dashboard = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <Typography variant="h1">I am private</Typography>
      <Typography variant="h1">{user}</Typography>
    </div>
  );
};

export default Dashboard;
