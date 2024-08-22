import React, { useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

interface SignInProps {
  setSignUp: (value: boolean) => void;
}

interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  contactMode: string;
}

const SignIn: React.FC<SignInProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const hideBorder = {
    border: 'none',
    borderBottom: '1px solid #ccc',
    borderRadius: '0',
  };

  const handleSign = async () => {
    try {
      const response = await axios.post('/api/auth/sign-in', { email, password });
      const { user, token } = response.data;

      localStorage.setItem('token', token);
      message.success(`Welcome back, ${user.firstName}!`);
      console.log('User data:', user);

    } catch (error) {
      message.error('Invalid email or password');
    }
  };

  return (
    <>
      <Form layout="vertical">
        <Form.Item name="email" className="pt-3">
          <Input
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={hideBorder}
          />
        </Form.Item>

        <Form.Item name="password" className="pt-3">
          <Input.Password
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={hideBorder}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <Form.Item className="mt-10">
          <Button
            type="primary"
            onClick={handleSign}
            className={`w-full text-2xl py-8 bg-[#3A244A] border-2 border-[#3A244A]`}
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignIn;
