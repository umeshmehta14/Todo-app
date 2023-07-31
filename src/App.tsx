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

  // https://img.freepik.com/free-photo/blue-abstract-texture_24972-159.jpg?w=1060&t=st=1690797669~exp=1690798269~hmac=0d5aef5f9e9eb9e94ef076fad025dbcf3c579e37ce120ff71f166a3392fc33c9
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
