import React, { useRef, useState } from 'react';
import Form from './component/Form';
import List from './component/List';

const App = () => {
  const [todo, setTodo] = useState([]);
  const todoRef = useRef({});
  const addTodo = (e) => {
    e.preventDefault();
    const id = Math.random() * 999999;
    setTodo([...todo, { id, value: todoRef.current.value }]);
    todoRef.current.value = '';
  };

  const removeTodo = (todoId) => {
    setTodo(todo.filter(({ id }) => id !== todoId));
  };

  return (
    <>
      <Form
        todoRef={todoRef}
        addTodo={addTodo}
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
