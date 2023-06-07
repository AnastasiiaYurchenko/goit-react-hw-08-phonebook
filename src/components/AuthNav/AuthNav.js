import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <p>AuthNav </p>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};

export default AuthNav;
