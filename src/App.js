import React, { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    const id = Math.random() * 999999
    setTodo([...todo, {id, value}]);
    setValue('');
  }

  const removeTodo = (todoId) => {
    setTodo(todo.filter(({id}) => id !== todoId ));
  }

  return (
    <>
      <form onSubmit={addTodo}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={addTodo}>Add</button>
      </form>
      <br/>
      <ul>
        {todo.map(({value, id}) => 
            <li key={id}>{value} <button onClick={() => removeTodo(id)}>X</button></li>
        )}
      </ul>
    </>
  );
}

export default App;
