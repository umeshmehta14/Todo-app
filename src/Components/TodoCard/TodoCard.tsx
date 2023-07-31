import React, { useEffect, useRef, useState } from "react";
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
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const { id, isCompleted, todo: task } = todo;
  const [editValue, setEditValue] = useState<string>(task);

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

  const handleEdit = (e: React.FormEvent, id: number) => {
    console.log("object");
    e.preventDefault();
    const updatedTodo = todos?.map((todo) =>
      todo.id === id ? { ...todo, todo: editValue } : todo
    );
    setTodos(updatedTodo);
    setIsEdit(!isEdit);
  };

  const handleBlur = () => {
    setIsEdit(false);
    // Only submit the form if the input value has changed
    if (editValue !== task) {
      submitForm();
    }
  };

  const submitForm = () => {
    // Trigger form submission by clicking the hidden submit button
    submitButtonRef.current?.click();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [isEdit]);

  return (
    <form className="card-main" onSubmit={(e) => handleEdit(e, id)}>
      <div className="card-background"></div>
      {isEdit ? (
        <>
          <input
            ref={inputRef}
            type="text"
            value={editValue}
            onChange={({ target }) => setEditValue(target.value)}
            onBlur={handleBlur}
          />
          <button
            type="submit"
            style={{ display: "none" }}
            ref={submitButtonRef}
          />
        </>
      ) : isCompleted ? (
        <s>{task}</s>
      ) : (
        <p>{task}</p>
      )}
      <div className="icon-section">
        <AiFillEdit
          title="Edit"
          onClick={() => !isCompleted && !isEdit && setIsEdit(!isEdit)}
        />
        <AiFillDelete title="Delete" onClick={() => handleDelete(id)} />
        <MdDone title="Done" onClick={() => handleDone(id)} />
      </div>
    </form>
  );
};

export default TodoCard;
