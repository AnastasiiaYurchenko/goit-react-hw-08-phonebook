import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/auth-selectors';
import { Header } from './AppBar.styled';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <Header>
      <Navigation />
      {/* Если пользователь залоггинен, показіваем UserMenu, иначе  - AuthNav */}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};

export default AppBar;
