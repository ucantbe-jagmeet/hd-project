import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SignUpState {
  signUp: boolean;
  forgotPassword: boolean; 
}

const initialState: SignUpState = {
  signUp: true,
  forgotPassword: false,
};

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    toggleSignUp: (state) => {
      state.signUp = !state.signUp;
      state.forgotPassword = false;
    },
    setSignUp: (state, action: PayloadAction<boolean>) => {
      state.signUp = action.payload;
      state.forgotPassword = false;
    },
    setForgotPassword: (state, action: PayloadAction<boolean>) => {
      state.forgotPassword = action.payload;
      state.signUp = false;
    },
    resetToSignIn: (state) => {
      state.signUp = false;
      state.forgotPassword = false;
    },
  },
});

export const { toggleSignUp, setSignUp, setForgotPassword, resetToSignIn } = signUpSlice.actions;
export default signUpSlice.reducer;
