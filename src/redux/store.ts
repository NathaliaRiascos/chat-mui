import {
    chatSlice
  } from './features';
  
  import { configureStore } from '@reduxjs/toolkit';
  
  export const store = configureStore({
    reducer: {
      chat: chatSlice.reducer,
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;