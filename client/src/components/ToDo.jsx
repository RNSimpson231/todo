import { useTodosContext } from "../contexts/ToDosContext";

function ToDo({ todo }) {
  const { toggleFinished, modifyDescription, removeToDo } = useTodosContext();

  return (
    <div>
      <input
        type="checkbox"
        onChange={() => toggleFinished(todo._id)}
        checked={todo.finished}
      ></input>
      <h3 style={ (todo.finished ? {"textDecoration": "line-through"} : {}) }>{todo.name}</h3>
      <textarea
        value={todo.description}
        onChange={(e) => modifyDescription(e.target.value, todo._id)}
        placeholder="Write additional details here."
      ></textarea>
      <button onClick={() => removeToDo(todo._id)}>Delete ToDo</button>
    </div>
  );
}

export default ToDo;
