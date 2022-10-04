import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { register, login, logout, refreshUser } from './operations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user.name = action.payload.name;
    },
  },
});

const authPersistConfig = {
  key: 'authToken',
  storage,
  whitelist: ['token'],
};

export const authPersistReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);
