import React from 'react';

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox"></input>
      {props.item}
    </div>
  );
}
export default TodoItem;
