import styled from 'styled-components';

const Message = styled.div`
  color: red;
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
`;

const ErrorMessage = ({ message }) => {
    console.log(message)
    return <Message>{message}</Message>;
};

export default ErrorMessage;
