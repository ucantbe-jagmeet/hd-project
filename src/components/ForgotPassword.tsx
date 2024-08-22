import React, { useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setOtpSent } from '@/redux/SignUpSlice/signUpSlice';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSendOTP = async () => {
    try {
      const response = await axios.post(`${window.location.origin}/api/auth/sendOtp`, { email });
      if (response.status === 200) {
        message.success('OTP sent to your email!');
        dispatch(setOtpSent(true));
      }
    } catch (error) {
      message.error('Failed to send OTP. Please check your email.');
    }
  };

  return (
    <Form layout="vertical">
      <Form.Item  className="pt-3">
        <Input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Item>

      <Form.Item className="mt-10">
        <Button type="primary" onClick={handleSendOTP}className={`w-full text-2xl py-8 border-[#3A244A] border-2 text-[#3A244A] bg-white`}>
          Send OTP
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ForgotPassword;
