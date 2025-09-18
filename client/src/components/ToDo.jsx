import { useTodosContext } from "../contexts/ToDosContext";

function ToDo({ todo }) {
  const { toggleFinished, modifyDescription, removeToDo } = useTodosContext();

  return (
    <div className="card bg-neutral text-neutral-content w-96">
      <div className="flex">
        <p
          style={todo.finished ? { textDecoration: "line-through" } : {}}
          className="text-[32px] grow ml-4 mt-2"
        >
          {todo.name}
        </p>
        <div className="card-actions justify-end m-4">
          <button
            onClick={() => removeToDo(todo._id)}
            className="btn btn-square btn-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="card-body">
        <div className="flex">
          <input
            type="checkbox"
            onChange={() => toggleFinished(todo._id)}
            checked={todo.finished}
            className="checkbox ml-1 mr-4"
          ></input>
          <textarea
            value={todo.description}
            onChange={(e) => modifyDescription(e.target.value, todo._id)}
            placeholder="Write additional details here."
            className="textarea grow"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default ToDo;

<div className="card-body">
  <h2 className="card-title">Large Card</h2>
  <p>
    A card component has a figure, a body part, and inside body there are title
    and actions parts
  </p>
  <div className="justify-end card-actions">
    <button className="btn btn-primary">Buy Now</button>
  </div>
</div>;
