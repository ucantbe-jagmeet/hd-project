import React from 'react';
import { Button, Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

interface SignInProps {
  setSignUp: (value: boolean) => void;
}

const SignIn: React.FC<SignInProps> = ({ setSignUp }) => {
  const hideBorder = {
    border: 'none',
    borderBottom: '1px solid #ccc',
    borderRadius: '0',
  };

  return (
    <>
      <Form layout="vertical">
        <Form.Item name="email" className="pt-3">
          <Input placeholder="Enter Email" style={hideBorder} />
        </Form.Item>

        <Form.Item name="password" className="pt-3">
          <Input.Password
            placeholder="Password"
            style={hideBorder}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
      </Form>
      <Form.Item className="mt-10">
        <Button
          type="primary"
          onClick={() => setSignUp(true)}
          className={`w-full text-2xl py-8 bg-[#3A244A] border-2 border-[#3A244A]`}
        >
          Sign Up
        </Button>
      </Form.Item>
    </>
  );
};

export default SignIn;
