import React, { useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { resetToSignIn } from '@/redux/SignUpSlice/signUpSlice';

const ChangePassword: React.FC = () => {
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
   const dispatch = useDispatch();
  const handleChangePassword = async () => {
    try {
      const response = await axios.post(`${window.location.origin}/api/auth/changePassword`, {email, otp, oldPassword, newPassword });
      if (response.status === 200) {
        message.success('Password changed successfully!');
        dispatch(resetToSignIn()); 
      }
    } catch (error) {
      message.error('Failed to change password. Please check your details.');
    }
  };
 const hideBorder = {
    border: 'none',
    borderBottom: '1px solid #ccc',
    borderRadius: '0',
  };
  return (
    <Form layout="vertical">
      <Form.Item className="pt-3">
        <Input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={hideBorder}
        />
      </Form.Item>

      <Form.Item className="pt-3">
        <Input
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          style={hideBorder}
        />
      </Form.Item>

      <Form.Item className="pt-3">
        <Input.Password
          placeholder="Enter old password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          style={hideBorder}
        />
      </Form.Item>

      <Form.Item className="pt-3">
        <Input.Password
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={hideBorder}
        />
      </Form.Item>

      <Form.Item className="mt-10">
        <Button type="primary" onClick={handleChangePassword}className={`w-full text-2xl py-8 bg-[#3A244A] border-2 border-[#3A244A]`}>
          Change Password
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ChangePassword;
