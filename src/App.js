import './App.css';
import React, { useState } from 'react';
import TodoBoard from './components/TodoBoard';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    setTodoList([...todoList, inputValue]);
  };
  // const Delete = (id) => {
  //   setTodoList(todoList.filter((todoList) => todoList.id !== id));
  // };
  return (
    <main>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList} />
    </main>
  );
}

export default App;
