import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ addTodo, todoRef }) => (
  <form onSubmit={addTodo}>
    <input ref={todoRef} />
    <button type="submit" onClick={addTodo}>Add</button>
  </form>
);

Form.propTypes = {
  addTodo: PropTypes.func.isRequired,
  todoRef: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Form;
