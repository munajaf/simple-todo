import React from 'react';
import { FormCenter, Input } from './styled/Form';
import { Button } from './styled/global';

const Form = ({ addTodo, todoRef }) => (
  <FormCenter onSubmit={addTodo}>
    <Input ref={todoRef} />
    <Button type="submit" onClick={addTodo}>Add</Button>
  </FormCenter>
);

export default Form;
