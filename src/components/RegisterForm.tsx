'use client';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography } from 'antd';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';
import ChangePassword from './ChangePassword';
import { toggleSignUp, setSignUp, setForgotPassword, resetToSignIn } from '@/redux/SignUpSlice/signUpSlice';
import { RootState, AppDispatch } from '@/redux/store';

const { Title, Text } = Typography;

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { signUp, forgotPassword, otpSent } = useSelector((state: RootState) => state.signUp);

  const getTitle = () => {
    if (forgotPassword && !otpSent) {
      return 'Forgot Password';
    } else if (otpSent) {
      return 'Change Password';
    } else if (forgotPassword && otpSent) {
      return 'Change Password';
    } else if (signUp) {
      return 'Let Us Know';
    } else {
      return 'Fill What We Know';
    }
  };

  return (
    <main className="w-full md:w-4/5 mx-auto md:h-screen md:pt-[4rem]">
      <div className="flex justify-between items-center">
        <Title level={1}>
          {getTitle()} <span style={{ color: 'red' }}>!</span>
        </Title>
        {!forgotPassword && (
          <Button type="link" onClick={() => dispatch(toggleSignUp())}>
            <Text strong className="text-xl">
              Sign <span style={{ color: 'red' }}>{signUp ? 'In' : 'Up'}</span>
            </Text>
          </Button>
        )}
        {forgotPassword && !otpSent && (
          <Button type="link" onClick={() => dispatch(resetToSignIn())}>
            <Text strong className="text-xl">
              Sign <span style={{ color: 'red' }}>In</span>
            </Text>
          </Button>
        )}
      </div>

      {forgotPassword && !otpSent ? (
        <ForgotPassword />
      ) : otpSent ? (
        <ChangePassword />
      ) : signUp ? (
        <SignUp />
      ) : (
        <SignIn setSignUp={(value: boolean) => dispatch(setSignUp(value))} />
      )}
    </main>
  );
};

export default RegisterForm;
