import React from "react";
import "./TodoList.css";
import { todos } from "../../Model";
import TodoCard from "../TodoCard/TodoCard";

interface Props {
  todos: todos[];
  setTodos: React.Dispatch<React.SetStateAction<todos[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      {todos?.map((todo) => (
        <TodoCard todo={todo} setTodos={setTodos} todos={todos} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
