import { TodoContext } from "./TodoContext";

interface props {
  children: JSX.Element | JSX.Element[];
}

const TodoProvider = ({ children }: props) => {
  return <TodoContext.Provider value={{}}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
