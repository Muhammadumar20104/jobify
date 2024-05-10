// darkModeSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: false,
};

const DarkSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleDarkMode } = DarkSlice.actions;
export const selectDarkMode = (state) => state.darkMode.isDarkMode;
export default DarkSlice.reducer;
