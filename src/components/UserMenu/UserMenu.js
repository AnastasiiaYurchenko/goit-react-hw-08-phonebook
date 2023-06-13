import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { authSelectors } from 'redux/auth/auth-selectors';
import { UserName, Wrap } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUsername);

  return (
    <Wrap>
      <UserName>Welcome, {name}</UserName>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Wrap>
  );
};

export default UserMenu;
