import { login } from './thunks';

import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  user: string | null;
  isSuccess: boolean;
  isError: boolean;
}

const initialState: AuthState = {
  user: localStorage.getItem('user') || '',
  isSuccess: false,
  isError: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
        state.user = ''
        state.isSuccess = false;
        state.isError = false;
      localStorage.removeItem('user');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state) => {
        state.user = 'Admin'
        state.isSuccess = true;
        state.isError = false;
        localStorage.setItem('user', 'Admin');
      })
      .addCase(login.rejected, (state) => {
        state.isError = true;
        state.isSuccess = false;
      })
  },
});

export const { logout } = authSlice.actions;