import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <p>Navigation</p>
      <NavLink to="/">Home</NavLink>
      {/*  Если залогинен, isLoggedIn && */}
      <NavLink to="/contacts"> Contacts</NavLink>
    </div>
  );
};

export default Navigation;
