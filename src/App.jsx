import React, { useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Form from './component/Form';
import List from './component/List';
import { addNew, deleteData } from './redux/actions';

const App = () => {
  const dispatch = useDispatch();
  const { todo } = useSelector((state) => state.newReducer, shallowEqual);
  const todoRef = useRef({});

  const addTodo = (e) => {
    e.preventDefault();
    const id = Math.random() * 999999;
    const { current: { value } } = todoRef;
    if (value.trim()) {
      dispatch(addNew(id, value));
      todoRef.current.value = '';
    }
  };

  const removeTodo = (todoId) => {
    dispatch(deleteData(todoId));
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
