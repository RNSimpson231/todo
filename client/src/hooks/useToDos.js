import { useState } from "react";
import { getTodos, createTodo, deleteTodo, updateTodo } from "../api/todos.js";
import { useEffect } from "react";

export function useToDos() {
  const [todos, setTodos] = useState([]);
  const [toDoName, setToDoName] = useState("");

  useEffect(() => {
    console.log("Fetching todos");
    const fetchTodos = async () => {
      try {
        const todos = await getTodos();
        setTodos((prev) => todos.data);
      } catch (err) {
      } finally {
      }
    };
    fetchTodos();
  }, []);

  const addToDo = async () => {
    try {
      if (toDoName !== "") {
        const newTodo = {
          name: toDoName,
          finished: false,
          description: "",
        };

        const addedTodo = await createTodo(newTodo);

        if (addedTodo) {
          setToDoName("");
          setTodos((prev) => {
            const updated = [...prev, newTodo];
            return updated;
          });
        }
      } else {
        alert("Please enter a name for your ToDo");
      }
    } catch (err) {
    } finally {
    }
  };

  const modifyDescription = async (description, id) => {
    try {
      const updatedTodo = {
        ...todos.find((todo) => todo._id === id),
        description: description,
      };

      const finalTodo = await updateTodo(id, updatedTodo);

      if (finalTodo) {
        setTodos((prev) =>
          prev.map((todo) => (todo._id === id ? updatedTodo : todo))
        );
      } else {
        alert("Please enter a name for your ToDo");
      }
    } catch (err) {
    } finally {
    }
  };

  const removeToDo = async (id) => {
    try {
      console.log(id)
      const deletedTodo = await deleteTodo(id);
      if (deletedTodo) {
        setTodos((prev) => prev.filter((todo) => todo._id !== id));
      }
    } catch (err) {
      console.log(err)
    } finally {
    }
  };

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
    removeToDo,
  };
}
