import React, { useState } from "react";
import AddForm from "./AddForm";

function AddList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(todo, ...todos);
  };

  return (
    <div>
      <h1>what's the plan today?</h1>
      <AddForm onSubmit={addTodo} />
    </div>
  );
}

export default AddList;
