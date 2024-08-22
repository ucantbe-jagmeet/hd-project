import { configureStore } from '@reduxjs/toolkit';
import signUpReducer from './SignUpSlice/signUpSlice';
import userReducer from './UserSlice/userSlice';

export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
