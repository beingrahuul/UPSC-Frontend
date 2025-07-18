import React, { useState } from 'react';
import styled from 'styled-components';

//components
import OtpVerification from './OtpVerification';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #111;
  border-radius: 8px;
  min-width: 370px;
  min-height: 420px;
  padding: 40px;
  box-sizing: border-box;
`;

const Pariksha = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 26px;
  font-weight: 500;
  letter-spacing: 0.2em;
  margin-bottom: 30px;
  background: linear-gradient(90deg, #5065FF 0%, #FF701D 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const Subtitle = styled.div`
  color: #fff;
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 30px;
  text-align: center;
`;

const Label = styled.label`
  color: #FFFFFF99;
  font-size: 14px;
  font-weight: 400;
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
`

const InputRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputWrap = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #44474A;
  background: #232325;
  color: #fff;
  font-size: 16px;
  box-sizing: border-box;
`;

const TogglePassword = styled.span`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #bdbdbd;
  font-size: 15px;
  cursor: pointer;
  user-select: none;
`;

const Button = styled.button`
  background: #7283FF;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  margin-bottom: 30px;
`;

const Terms = styled.div`
  color: #FFFFFFCC;
  font-size: 14px;
  text-align: center;
  a {
    color: #FFFFFFCC;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Signup = ({ onSignup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showOtp, setShowOtp] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setShowOtp(true);
  };

  const handleVerify = otp => {
    // You can add OTP validation here
    onSignup({ name, email });
  };

  const handleChangeEmail = () => {
    setShowOtp(false);
  };

  if (showOtp) {
    return <OtpVerification email={email} onVerify={handleVerify} onChangeEmail={handleChangeEmail} />;
  }

  return (
    <Container>
      <Pariksha>Pariksha</Pariksha>
      <Subtitle>Enter your email</Subtitle>
      <Form onSubmit={handleSubmit}>
        <InputRow>
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} required />
        </InputRow>
        <InputRow>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required />
        </InputRow>
        <InputRow>
          <Label htmlFor="password">Password</Label>
          <InputWrap>
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <TogglePassword onClick={() => setShowPassword(v => !v)}>
              {showPassword ? 'Hide' : 'Show'}
            </TogglePassword>
          </InputWrap>
        </InputRow>
        <Button type="submit">Send OTP</Button>
      </Form>
      <Terms>
        By continuing, you agree to <a href="#">Terms</a> & <a href="#">Privacy Policy</a>.
      </Terms>
    </Container>
  );
};

export default Signup; 