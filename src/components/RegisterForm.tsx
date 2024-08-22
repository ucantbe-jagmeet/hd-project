'use client'
import React, { useState } from 'react';
import { Form, Button, Typography } from 'antd';
import SignUp from './SignUp';
import SignIn from './SignIn';

const { Title, Text } = Typography;

const RegisterForm = () => {
  const [signUp, setSignUp] = useState<boolean>(true);
  const hideBorder = {
    border: 'none',
    borderBottom: '1px solid #ccc',
    borderRadius: '0',
  };

  return (
    <main className="w-4/5 mx-auto h-screen pt-[4rem] ">
      <div className="flex justify-between items-center">
        <Title level={1}>
          {signUp ? "Let Us Know" : "Fill What We know"} <span style={{ color: 'red' }}>!</span>
        </Title>
        <Button type="link" onClick={() => setSignUp(!signUp)}>
          <Text strong className='text-xl'>
            Sign <span style={{ color: 'red' }}>{signUp ? 'In' : 'Up'}</span>
          </Text>
        </Button>
      </div>

      {signUp ? <SignUp /> : <SignIn setSignUp={setSignUp} />}

      <Form.Item className={ signUp ? 'mt-10' : 'mt-5'}>
        <Button
          type="primary"
          className={`w-full text-2xl py-8  ${signUp ? 'bg-[#3A244A] border-2 border-[#3A244A]' : 'text-[#3A244A]  bg-white border-2 border-[#3A244A]'}`}
        >
          {signUp ? 'Sign Up' : 'Sign In'}
        </Button>
      </Form.Item>
    </main>
  );
};

export default RegisterForm;
