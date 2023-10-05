import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 openModelSignUp: false,
 openModelSignIn: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    openModelSignUp: (state) => {
      state.openModelSignUp =  true;
     
    },
    openModelSignIn: (state) => {
      state.openModelSignIn = true;
    },
  },
});

export const { openModelSignUp, openModelSignIn } = globalSlice.actions;
export default globalSlice.reducer;
