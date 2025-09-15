import ToDo from "./ToDo.jsx";
import { useTodosContext } from "../contexts/ToDosContext.jsx";

function ToDoList() {

  const {
    todos,
    toDoName,
    setToDoName,
    addToDo
  } = useTodosContext();

    
  return (
    <>
      <h1>ToDo List</h1>
      <div>
        <button
          disabled={toDoName.trim() === ""}
          onClick={() =>
            addToDo(document.getElementById("toDoName").value)
          }
        >
          Add ToDo
        </button>
        <input
          id="toDoName"
          value={toDoName}
          onChange={(e) => setToDoName(e.target.value)}
          type="textbox"
          placeholder="Enter a name for your ToDo"
        ></input>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <ToDo todo={todo}></ToDo>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
