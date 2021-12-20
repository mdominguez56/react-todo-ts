import { TodoContext } from "./TodoContext";
import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoState } from "../interfaces/interfaces";

const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: "1",
      description: "Recolectar las piedras del infinito",
      completed: false,
    },
    {
      id: "2",
      description: "Piedra del alma",
      completed: false,
    },
  ],
  completed: 0,
  pending: 2,
};

interface props {
  children: JSX.Element | JSX.Element[];
}

const TodoProvider = ({ children }: props) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  return (
    <TodoContext.Provider
      value={{
        todoState,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
