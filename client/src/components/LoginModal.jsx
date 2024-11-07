import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useModal } from '../context/ModalContext';
import { Button, Modal, Form, Input } from 'antd';



/* NOTE: 'Ant Design' form handles the input state with the onFinish attribute 
to pass values directly into handleLogin */

const LoginModal = () => {
  //useContext for user and modal
  const { login } = useUser();
  const { isLoginModalOpen, closeLoginModal } = useModal();

  // Log user in based on input
  const handleLogin = async (values) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        // Store the JWT token in local storage
        localStorage.setItem('token', data.token);
        console.log('Login successful.');
        // Save user data and modal state to context
        login(data);
        closeLoginModal()
      } else {
        Modal.warning({
          title: 'Login failed',
          content:  <div>
          <p>Invalid username/password. Please check your credentials and try again.</p>
        </div>,
          onOk: () => {},
        });
      }
    } catch (error) {
      console.error('Error during login:', error);
      Modal.error({
        title: 'Network Error',
        content: 'There was a problem connecting to the server. Please try again.',
      });
    }
  };

  return (
    <Modal
      title="Login"
      open={isLoginModalOpen}
      onCancel={closeLoginModal}
      footer={null}
    >
      <p>Please enter your login info below.</p>

      <Form onFinish={handleLogin}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginModal;
