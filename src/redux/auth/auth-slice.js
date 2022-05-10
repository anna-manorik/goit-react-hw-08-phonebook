import { createSlice } from '@reduxjs/toolkit';
import { usersApi } from './authApi';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      usersApi.endpoints.addUser.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      }
    ),
    builder.addMatcher(
      usersApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      }
    ),
    builder.addMatcher(
      usersApi.endpoints.logout.matchFulfilled,
      (state, { payload }) => {
        state.token = null;
        state.user = { name: null, email: null };
        state.isLoggedIn = false;
      }
    )
  },
});

export default authSlice.reducer;
