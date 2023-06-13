import { styled } from 'styled-components';

export const Form = styled.form`
  width: 320px;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  border-radius: 4px;
  cursor: pointer;

  &:hover,
  &:focus {
    background: lightblue;
  }
`;
