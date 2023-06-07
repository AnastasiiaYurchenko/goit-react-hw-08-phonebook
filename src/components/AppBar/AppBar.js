import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';

const AppBar = () => {
  return (
    <div>
      <h1>AppBar</h1>
      <Navigation />
      {/* isLoggedIn ? */}
      <UserMenu />
      {/* иначе : */}
      <AuthNav />
    </div>
  );
};

export default AppBar;
