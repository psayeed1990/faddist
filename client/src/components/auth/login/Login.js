import React from 'react';

const Login = () => {
  return (
    <div>
      <form>
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="name" placeholder="Password" />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
export default Login;
