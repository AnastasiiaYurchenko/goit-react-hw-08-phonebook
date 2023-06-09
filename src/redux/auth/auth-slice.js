import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  //   Сюда можно добавить лоадер, еррор
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      //   Под капотом IMMER
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      //   Под капотом IMMER
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;
