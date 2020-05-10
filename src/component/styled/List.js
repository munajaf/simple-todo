import styled from 'styled-components';

export const UnorderedList = styled.ul`
  ${({ ready, isDraggingOver }) => ready && (
    `background: ${isDraggingOver ? '#3498db' : '#333'};
    padding: 10px;
    border-radius: 10px;`
  )}
`;

export const ListData = styled.li`
  display: flex;
  margin: 10px;
`;

export const Text = styled.div`
  background: ${({ isDragging }) => (isDragging ? '#2ecc71' : 'white')};
  margin-left: 10px;
  font-size: 1rem;
  font-family: Arial;
  border-radius: 3px;
  padding:10px;
  width: 100%;
`;
