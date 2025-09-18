import ToDo from "./ToDo.jsx";
import { useTodosContext } from "../contexts/ToDosContext.jsx";

function ToDoList() {
  const { todos, toDoName, setToDoName, addToDo } = useTodosContext();

  return (
    <>
      <div className="w-[80%] flex mt-4 mx-auto">
        <button
          disabled={toDoName.trim() === ""}
          onClick={() => addToDo(document.getElementById("toDoName").value)}
          className="btn btn-xl btn-primary mr-4"
        >
          Add Task
        </button>

        <input
          id="toDoName"
          value={toDoName}
          onChange={(e) => setToDoName(e.target.value)}
          type="textbox"
          placeholder="Enter a name for your To do"
          className="input input-xl grow"
        ></input>
      </div>
      <div className="w-[90%] m-5">
        <ul className="grid grid-cols-4 gap-20">
          {todos.map((todo) => (
            <div className="">
            <li key={todo._id}>
              <ToDo todo={todo}></ToDo>
            </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ToDoList;
