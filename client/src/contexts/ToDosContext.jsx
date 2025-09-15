import { createContext, useContext } from 'react';

export const TodosContext = createContext(null);
export const useTodosContext = () => useContext(TodosContext);