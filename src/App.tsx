import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import InputField from "./Components/InputField/InputField";
import { todos } from "./Model";
import TodoList from "./Components/TodoList/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<todos[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos([...todos, { id: Date.now(), todo, isCompleted: false }]);
    setTodo("");
  };

  console.log(todos);

  return (
    <div className="App">
      <Header />
      <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
