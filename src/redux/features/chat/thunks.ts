import { createAsyncThunk } from '@reduxjs/toolkit';
import { ChatService } from '../../../services/chatService';

const chat = new ChatService()

export const getMessages = createAsyncThunk(
  'chat/getMessages',
  async (__, { rejectWithValue }) => {
    try {
      return await chat.getAll();
    } catch (error) {
      return rejectWithValue('Unable to login');
    }
  }
);

