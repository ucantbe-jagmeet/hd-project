'use client'
import React, { useState } from 'react';
import { Form, Input, Button, Select, Typography } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;

const RegisterForm = () => {
  const [signUp, setSignUp] = useState<boolean>(false)
  const hideBorder = {
              border: 'none',
              borderBottom: '1px solid #ccc',
              borderRadius: '0',
            }
  return (
    <main className="w-4/5 mx-auto">
      <div className="flex justify-between mb-4">
        <Title level={2}>
          Let Us Know <span style={{ color: 'red' }}>!</span>
        </Title>
        <Button type="link" onClick={()=> setSignUp(!signUp)}>
          <Text strong>
            Sign <span style={{ color: 'red' }}>{signUp ? 'In' : 'Up'}</span>
          </Text>
        </Button>
      </div>

     {
      signUp ? (<Form layout="vertical">
        <Form.Item name="firstName" label="First Name">
          <Input
            placeholder="First Name"
            style={hideBorder}
          />
        </Form.Item>

        <Form.Item name="lastName" label="Last Name">
          <Input
            placeholder="Last Name"
            style={hideBorder}
          />
        </Form.Item>

        <Form.Item name="password" label="Set Password">
          <Input.Password
            placeholder="Set Password"
            style={hideBorder}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <Form.Item name="confirmPassword" label="Retype Password">
          <Input.Password
            placeholder="Retype Password"
            style={hideBorder}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

       <Form.Item name="contactMode" label="Contact Mode">
        <Select
          defaultValue="email"
          className="border-none outline-none"
        >
          <Option value="email">Email</Option>
          <Option value="phone">Phone</Option>
        </Select>
      </Form.Item>


        <Form.Item name="email" label="Enter Email">
          <Input
            placeholder="Enter Email"
            style={hideBorder}
          />
        </Form.Item>

        
      </Form>) : (
        <Form layout="vertical">
          <Form.Item name="email" label="Enter Email">
              <Input
                  placeholder="Enter Email"
                  style={hideBorder}
              />
          </Form.Item>
           <Form.Item name="password" label="Password">
          <Input.Password
            placeholder="Password"
            style={hideBorder}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
        </Form>
      )
     }

             <Form.Item>
          <Button
            type="primary"
            block
          >
            {
              signUp ? 'Sign Up' : 'Sign In'
            }
          </Button>
        </Form.Item>
    
    </main>
  );
};

export default RegisterForm;
