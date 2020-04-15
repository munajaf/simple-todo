import React from 'react';
import PropTypes from 'prop-types';

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

List.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default List;
