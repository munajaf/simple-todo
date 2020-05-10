import React from 'react';

const Form = ({ addTodo, todoRef }) => (
  <form onSubmit={addTodo}>
    <input ref={todoRef} />
    <button type="submit" onClick={addTodo}>Add</button>
  </form>
);

export default Form;
