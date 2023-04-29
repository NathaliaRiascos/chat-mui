import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../../../services/authServices';
import { User } from '../../../models/user';

const auth = new AuthService()

export const login = createAsyncThunk(
  'user/login',
  async (user: User, thunkAPI) => {
    try {
        console.log('entra')
      return await auth.login(user);
     
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);