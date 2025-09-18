import { TodosProvider } from "../contexts/ToDosProvider.jsx";
import Navbar from "./Navbar.jsx";
import ToDoList from "./ToDoList.jsx";

function App() {
  return (
    <TodosProvider>
      <div className="bg-base-200 h-screen w-screen">
        <Navbar/>
        <ToDoList/>
      </div>
    </TodosProvider>
  );
}

export default App;
