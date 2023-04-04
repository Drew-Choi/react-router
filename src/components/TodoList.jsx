import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

export default function TodoList() {
  const todoList = useSelector((state) => state.todo.todoList);
  const inputRef = useRef();

  return (
    <section>
      <h1>할 일 목록</h1>
      <div>
        <input type="text" ref={inputRef} />
        <button>추가</button>
      </div>
      <ul>
        {todoList.map((el) => (
          <li key={el.id}> {el.text} </li>
        ))}
      </ul>
    </section>
  );
}
