import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/auth-selectors';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <div>
      <h1>AppBar</h1>
      <Navigation />
      {/* Если пользователь залоггинен, показіваем UserMenu, иначе  - AuthNav */}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default AppBar;
