import { useState } from "react";

export function useToDos() {
  const [todos, setTodos] = useState([]);
  const [toDoName, setToDoName] = useState("");

  const addToDo = () => {
    console.log(todos);
    if (toDoName !== "") {
      const randomID = Math.floor(Math.random() * 10000);
      const newTodo = {
        _id: randomID,
        name: toDoName,
        finished: false,
        description: "",
      };

      setToDoName("");

      setTodos((prev) => {
        const updated = [...prev, newTodo];
        return updated;
      });
    } else {
      alert("Please enter a name for your ToDo");
    }
  };

  const modifyDescription = (description, id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo._id === id ? { ...todo, description: description } : todo
      )
    );
  };

  const deleteToDo = (id) => {
    setTodos((prev) => 
        prev.filter((todo) =>
            todo._id !== id
        )
    )
  }

  const toggleFinished = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo._id === id
          ? {
              ...todo,
              finished: !todo.finished,
            }
          : todo
      )
    );
  };

  return {
    todos,
    toDoName,
    setToDoName,
    addToDo,
    toggleFinished,
    modifyDescription,
    deleteToDo
  };
}
