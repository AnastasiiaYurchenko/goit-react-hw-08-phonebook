import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { authSelectors } from 'redux/auth/auth-selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUsername);

  return (
    <div>
      <p>UserMenu</p>

      <p>Welcome, {name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
