import styled, { css } from 'styled-components';

const Button = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.1);
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 4px 6px;

  ${({ selected }) =>
    selected &&
    css`
      background-color: rgba(125, 138, 255, 0.10);
      color: #FFFFFF;
    `}
`;

const ButtonText = styled.h1`
  font-size: 12px;
  font-weight: 500;
  color: #FFFFFFCC;
  margin: 0;
`;

const Tags = ({ selected, value }) => {
  return (
    <Button selected={selected}>
      <ButtonText>{value}</ButtonText>
    </Button>
  );
};

export default Tags;
