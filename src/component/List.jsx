import React from 'react';
import { ListData, Text } from './styled/List';
import { Button } from './styled/global';

const List = ({ todo, removeTodo }) => (
  <ul>
    {todo.map(({ value, id }) => (
      <ListData key={id}>
        <Button remove type="submit" onClick={() => removeTodo(id)}>X</Button>
        <Text>{value}</Text>
      </ListData>
    ))}
  </ul>
);


export default List;
