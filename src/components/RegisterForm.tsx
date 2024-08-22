'use client';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Typography } from 'antd';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { toggleSignUp, setSignUp } from '@/redux/SignUpSlice/signUpSlice';
import { RootState, AppDispatch } from '@/redux/store';

const { Title, Text } = Typography;

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const signUp = useSelector((state: RootState) => state.signUp.signUp);

  return (
    <main className="w-4/5 mx-auto h-screen pt-[4rem]">
      <div className="flex justify-between items-center">
        <Title level={1}>
          {signUp ? 'Let Us Know' : 'Fill What We know'} <span style={{ color: 'red' }}>!</span>
        </Title>
        <Button type="link" onClick={() => dispatch(toggleSignUp())}>
          <Text strong className="text-xl">
            Sign <span style={{ color: 'red' }}>{signUp ? 'In' : 'Up'}</span>
          </Text>
        </Button>
      </div>

      {signUp ? <SignUp /> : <SignIn setSignUp={(value: boolean) => dispatch(setSignUp(value))} />}

    </main>
  );
};

export default RegisterForm;
