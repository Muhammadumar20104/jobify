import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: false,
};

const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    toggleLogin: (state) => {
      state.login = !state.login;
      console.log(state.login);
    },
  },
});

export const { toggleLogin } = LoginSlice.actions;
export const selectLoginCheck = (state) => state.login.login  // Correct selector accessing login state
console.log("Login Last",selectLoginCheck);
console.log(selectLoginCheck.login);


export default LoginSlice.reducer;
