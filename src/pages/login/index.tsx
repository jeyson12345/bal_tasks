import React from 'react';
import { Button, Form, Input } from 'antd';
import { useLoginConfigMutation } from 'src/app/services/users';
import { ILogin } from 'src/app/services/users/type';

const LoginPage: React.FC = () => {
  const [login] = useLoginConfigMutation();

  const onFinish = (values: ILogin) => {
    login(values);
  };

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 24,
      }}
    >
      <h2>Tizimga kirish</h2>

      <Form onFinish={onFinish} layout="vertical">
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          size="large"
          style={{ width: '100%' }}
        >
          Kirish
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
