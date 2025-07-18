import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Input = styled.input`
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #44474A;
  background: #18191B;
  color: #fff;
  font-size: 16px;
`;

const Button = styled.button`
  background: #4A7AFF;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 0;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onLogin({ name: 'Krishiv', email });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 style={{ color: '#fff', margin: 0 }}>Login</h2>
      <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default Login; 