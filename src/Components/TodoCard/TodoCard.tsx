import React from "react";
import "./TodoCard.css";
import { todos } from "../../Model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Prop = {
  todo: todos;
  todos: todos[];
  setTodos: React.Dispatch<React.SetStateAction<todos[]>>;
};

const TodoCard: React.FC<Prop> = ({ todo, setTodos, todos }) => {
  const { id, isCompleted, todo: task } = todo;

  const handleDone = (id: number) => {
    const updatedTodo = todos?.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodo);
  };

  const handleDelete = (id: number) => {
    const updatedTodo = todos?.filter((todo) => todo.id !== id);
    setTodos(updatedTodo);
  };

  return (
    <div className="card-main">
      <div className="card-background"></div>
      {isCompleted ? <s>{task}</s> : <p>{task}</p>}
      <div className="icon-section">
        <AiFillEdit title="Edit" />
        <AiFillDelete title="Delete" onClick={() => handleDelete(id)} />
        <MdDone title="Done" onClick={() => handleDone(id)} />
      </div>
    </div>
  );
};

export default TodoCard;
