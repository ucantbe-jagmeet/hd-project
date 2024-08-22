import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SignUpState {
  signUp: boolean;
  forgotPassword: boolean;
  otpSent: boolean;  
}

const initialState: SignUpState = {
  signUp: true,
  forgotPassword: false,
  otpSent: false, 
};

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    toggleSignUp: (state) => {
      state.signUp = !state.signUp;
      state.forgotPassword = false;
      state.otpSent = false; 
    },
    setSignUp: (state, action: PayloadAction<boolean>) => {
      state.signUp = action.payload;
      state.forgotPassword = false;
      state.otpSent = false; 
    },
    setForgotPassword: (state, action: PayloadAction<boolean>) => {
      state.forgotPassword = action.payload;
      state.signUp = false;
      state.otpSent = false;  
    },
    setOtpSent: (state, action: PayloadAction<boolean>) => {  
      state.otpSent = action.payload;
      if (action.payload) {
        state.forgotPassword = false;  // Hide ForgotPassword component when OTP is sent
      }
    },
    resetToSignIn: (state) => {
      state.signUp = false;
      state.forgotPassword = false;
      state.otpSent = false;
    },
  },
});

export const { toggleSignUp, setSignUp, setForgotPassword, setOtpSent, resetToSignIn } = signUpSlice.actions;
export default signUpSlice.reducer;
