'use client'
import React, { useState } from 'react';
import { Form, Input, Select, Button, message } from 'antd';
import axios from 'axios';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { BASE_URL } from '@/utils/url';

const { Option } = Select;

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contactMode, setContactMode] = useState('email');

  const hideBorder = {
    border: 'none',
    borderBottom: '1px solid #ccc',
    borderRadius: '0',
  };

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      message.error('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/api/auth/sign-up`, {
        email,
        password,
        firstName,
        lastName,
        contactMode,
      });

      console.log('API response:', response);

      message.success('Account created successfully! Please log in.');
    } catch (error) {
      console.error('Error:', error);
      message.error('There was an error creating your account.');
    }
  };

  return (
    <Form layout="vertical">
      <Form.Item name="firstName" className="pt-3">
        <Input
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={hideBorder}
        />
      </Form.Item>

      <Form.Item name="lastName" className="pt-3">
        <Input
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          style={hideBorder}
        />
      </Form.Item>

      <Form.Item name="password">
        <Input.Password
          placeholder="Set Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={hideBorder}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>

      <Form.Item name="confirmPassword" className="pt-3">
        <Input.Password
          placeholder="Retype Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={hideBorder}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>

      <Form.Item name="contactMode" className="pt-3">
        <Select
          placeholder="Contact Mode"
          value={contactMode}
          onChange={(value) => setContactMode(value)}
          style={hideBorder}
        >
          <Option value="email">Email</Option>
          <Option value="phone">Phone</Option>
        </Select>
      </Form.Item>

      <Form.Item name="email" className="pt-3">
        <Input
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={hideBorder}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" block onClick={handleSignUp} className={`w-full text-2xl py-8 bg-[#3A244A] border-2 border-[#3A244A]`}>
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUp;
