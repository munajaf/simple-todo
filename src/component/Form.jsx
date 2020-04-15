import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ addTodo, value, setValue }) => (
  <form onSubmit={addTodo}>
    <input value={value} onChange={(e) => setValue(e.target.value)} />
    <button type="submit" onClick={addTodo}>Add</button>
  </form>
);

Form.propTypes = {
  addTodo: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Form;
