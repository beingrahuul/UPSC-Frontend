import React, { useRef } from 'react';
import styled from 'styled-components';

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

const EmailText = styled.div`
  color: #FFFFFF99;
  font-size: 15px;
  text-align: center;
`;

const ChangeLink = styled.span`
  color: #7283FF;
  text-decoration: underline;
  cursor: pointer;
  font-size: 15px;
  margin-left: 6px;
`;


const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  margin: 40px 0px;
`

const Label = styled.label`
  color: #FFFFFF99;
  font-size: 14px;
  font-weight: 400;
`;

const InputRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;


const OtpRow = styled.div`
  display: flex;
  gap: 12px;
`;

const OtpInput = styled.input`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #FFFFFF33;
  background: #232325;
  color: #fff;
  font-size: 16px;
  text-align: center;
  outline: none;
  transition: border 0.2s;
  &:focus {
    border-color: #7283FF;
  }
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

const OtpVerification = ({ email, onVerify, onChangeEmail }) => {
  const [otp, setOtp] = React.useState(['', '', '', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (e, idx) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    if (!val) return;
    const newOtp = [...otp];
    newOtp[idx] = val[0];
    setOtp(newOtp);
    if (idx < 5 && val) {
      inputs.current[idx + 1].focus();
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === 'Backspace') {
      e.preventDefault(); // prevent default backspace behavior
  
      const newOtp = [...otp];
      if (otp[idx]) {
        newOtp[idx] = '';
        setOtp(newOtp);
      } else if (idx > 0) {
        newOtp[idx - 1] = '';
        setOtp(newOtp);
        inputs.current[idx - 1].focus();
      }
    } else if (e.key === 'ArrowLeft' && idx > 0) {
      inputs.current[idx - 1].focus();
    } else if (e.key === 'ArrowRight' && idx < 5) {
      inputs.current[idx + 1].focus();
    }
    
  };
  

  const handleVerify = e => {
    e.preventDefault();
    onVerify(otp.join(''));
  };

  return (
    <Container>
      <Pariksha>Pariksha</Pariksha>
      <Subtitle>Please check your Mail</Subtitle>
      <EmailText>
        We've sent an OTP on<br />
        <span style={{ color: '#fff'}}>{email}</span>
        <ChangeLink onClick={onChangeEmail}>change</ChangeLink>
      </EmailText>
      <Form onSubmit={handleVerify}>
        <InputRow>
        <Label>OTP</Label>
        <OtpRow>
          {otp.map((digit, idx) => (
            <OtpInput
              key={idx}
              type="text"
              maxLength={1}
              value={digit}
              onChange={e => handleChange(e, idx)}
              onKeyDown={e => handleKeyDown(e, idx)}
              ref={el => (inputs.current[idx] = el)}
              autoFocus={idx === 0}
            />
          ))}
        </OtpRow>
        </InputRow>
        <Button type="submit">Verify</Button>
      </Form>
      <Terms>
        By continuing, you agree to <a href="#">Terms</a> & <a href="#">Privacy Policy</a>.
      </Terms>
    </Container>
  );
};

export default OtpVerification; 