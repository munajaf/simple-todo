import React from 'react';

const List = ({ todo, removeTodo }) => (
  <ul>
    {todo.map(({ value, id }) => (
      <li key={id}>
        {value}
        {' '}
        <button type="submit" onClick={() => removeTodo(id)}>X</button>
      </li>
    ))}
  </ul>
);


export default List;
