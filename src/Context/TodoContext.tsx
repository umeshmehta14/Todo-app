import { createContext, ReactNode, useState, useContext } from "react";

interface todosType {
  id: string;
  todo: string;
  done: boolean;
}

export const TodoContext = createContext<{
  todo: string | undefined;
  todos: todosType[] | undefined;
}>({ todo: undefined, todos: undefined });

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<todosType[]>([]);

  return (
    <TodoContext.Provider value={{ todo, todos }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
