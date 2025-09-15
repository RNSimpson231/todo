import { TodosProvider } from "../contexts/ToDosProvider.jsx";
import ToDoList from "./ToDoList.jsx";

function App() {
  return (
    <TodosProvider>
      <ToDoList/>
    </TodosProvider>
  );
}

export default App;
