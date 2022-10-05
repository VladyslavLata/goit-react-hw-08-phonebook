import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const addAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      addAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.fulfillWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      addAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.fulfillWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.fulfillWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const persistToken = thunkAPI.getState().auth.token;

    if (persistToken === null) {
      return thunkAPI.fulfillWithValue('Unable to fetch user');
    }
    try {
      addAuthHeader(persistToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      thunkAPI.fulfillWithValue(error.message);
    }
  }
);
