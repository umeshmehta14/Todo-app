import React, { useRef } from "react";
import "./InputField.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
        inputRef.current?.blur();
      }}
    >
      <div className="input-box">
        <input
          type="text"
          ref={inputRef}
          placeholder="Enter Task"
          value={todo}
          onChange={({ target }) => setTodo(target.value)}
          required
        />
        <button className="btn">Go</button>
      </div>
    </form>
  );
};

export default InputField;
