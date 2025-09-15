import { TodosContext } from './ToDosContext';
import { useToDos } from '../hooks/useToDos';

export function TodosProvider({ children }) {
  const toDosData = useToDos();
  return (
    <TodosContext.Provider value={toDosData}>
      {children}
    </TodosContext.Provider>
  );
}