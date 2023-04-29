import {
    getMessages
  } from './thunks';
  
  import { createSlice } from '@reduxjs/toolkit';
  
  type Message = {
        sender: string,
        message: string,
  }
  interface ChatState {
    messages: Message[]
  }
  
  const initialState: ChatState = {
    messages: []
}
  
export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getMessages.fulfilled, (state, action) => {
          state.messages = action.payload;
        })
    },
  });

