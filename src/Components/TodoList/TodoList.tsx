import React from "react";
import "./TodoList.css";
import { todos } from "../../Model";
import TodoCard from "../TodoCard/TodoCard";

const TodoList: React.FC<{ todos: todos[] }> = ({ todos }) => {
  return (
    <div>
      {todos?.map((todo) => (
        <TodoCard />
      ))}
    </div>
  );
};

export default TodoList;
