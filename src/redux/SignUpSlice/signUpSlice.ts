import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SignUpState {
  signUp: boolean;
}

const initialState: SignUpState = {
  signUp: true,
};

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    toggleSignUp: (state) => {
      state.signUp = !state.signUp;
    },
    setSignUp: (state, action: PayloadAction<boolean>) => {
      state.signUp = action.payload;
    },
  },
});

export const { toggleSignUp, setSignUp } = signUpSlice.actions;
export default signUpSlice.reducer;
