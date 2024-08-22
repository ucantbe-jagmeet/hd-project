import React from 'react';
import { Form, Input, Select } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const { Option } = Select;

const SignUp: React.FC = () => {
  const hideBorder = {
    border: 'none',
    borderBottom: '1px solid #ccc',
    borderRadius: '0',
  };

  return (
    <Form layout="vertical">
      <Form.Item name="firstName" className="pt-3">
        <Input placeholder="First Name" style={hideBorder} />
      </Form.Item>

      <Form.Item name="lastName" className="pt-3">
        <Input placeholder="Last Name" style={hideBorder} />
      </Form.Item>

      <Form.Item name="password">
        <Input.Password
          placeholder="Set Password"
          style={hideBorder}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>

      <Form.Item name="confirmPassword" className="pt-3">
        <Input.Password
          placeholder="Retype Password"
          style={hideBorder}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>

      <Form.Item name="contactMode" className="pt-3">
        <Select
          placeholder="Contact Mode"
          style={hideBorder}
        >
          <Option value="email">Email</Option>
        </Select>
      </Form.Item>

      <Form.Item name="email" className="pt-3">
        <Input placeholder="Enter Email" style={hideBorder} />
      </Form.Item>
    </Form>
  );
};

export default SignUp;
