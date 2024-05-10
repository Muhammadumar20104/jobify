// store.js

import { configureStore } from '@reduxjs/toolkit';
import DarkSlice from '../feature/DarkSlice';
import LoginReducer from '../feature/LoginSlice';

const store = configureStore({
  reducer: {
    darkMode: DarkSlice,
    login:LoginReducer,
    // Add other reducers here if needed
  },
});

export default store;
