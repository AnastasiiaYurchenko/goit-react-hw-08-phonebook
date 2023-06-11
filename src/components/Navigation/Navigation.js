import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth/auth-selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <div>
      <p>Navigation</p>
      <NavLink to="/">Home</NavLink>
      {/*  Если залогинен, isLoggedIn && */}
      {isLoggedIn && <NavLink to="/contacts"> Contacts</NavLink>}
    </div>
  );
};

export default Navigation;
