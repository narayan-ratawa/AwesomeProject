import {createSlice} from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: false,
  reducers: {
    login(state, action) {
      state = action.payload;
    },
    logout(state, action) {
      state = action.payload;
    },
  },
});

export const {login, logout} = loginSlice.actions;
export default loginSlice.reducer;
