import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button`
  text-align: center;
  border: 1px solid transparent;
  padding: .20rem .75rem;
  ${({ remove }) => remove && 'margin-left:10px; cursor: pointer;'}
  color: #fff;
  background-color: ${({ remove }) => (remove ? 'red' : '#007bff')};
  border-color: ${({ remove }) => (remove ? 'red' : '#007bff')};
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
`;
