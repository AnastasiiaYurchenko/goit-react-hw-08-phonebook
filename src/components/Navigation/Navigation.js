import React from 'react';
import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth/auth-selectors';
import { Link } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <div>
      <Link to="/">Home</Link>
      {/*  Если залогинен, isLoggedIn && */}
      {isLoggedIn && <Link to="/contacts"> Contacts</Link>}
    </div>
  );
};

export default Navigation;
