import React, { useState } from 'react';
import Form from './component/Form';
import List from './component/List';

const App = () => {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    const id = Math.random() * 999999;
    setTodo([...todo, { id, value }]);
    setValue('');
  };

  const removeTodo = (todoId) => {
    setTodo(todo.filter(({ id }) => id !== todoId));
  };

  return (
    <>
      <Form
        value={value}
        addTodo={addTodo}
        setValue={setValue}
      />
      <br />
      <List
        removeTodo={removeTodo}
        todo={todo}
      />
    </>
  );
};

export default App;
