import express from "express";
import Todo from "../models/Todo.js";

const todosRouter = express.Router();

todosRouter.get("/", async (req, res) => {
  res.json([
    {
      _id: "1",
      name: "Test Todo",
      description: "This is a mock todo",
      finished: false,
    },
  ]);
});

todosRouter.post("/", async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || typeof name !== "string") {
      return res
        .status(400)
        .json({ error: "Name is required and must be a string." });
    }

    const newTodo = new Todo({ name, description });
    const savedTodo = await newTodo.save();

    res.status(201).json(savedTodo);
  } catch (err) {
    console.error("Error creating todo: ", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

todosRouter.patch("/:id", async (req, res) => {
  try {
    const { _id, name, description, finished } = req.body;
    const query = { _id: req.params.id };

    const finishedSave = await Todo.findByIdAndUpdate(
      req.params.id,
      { _id, name, description, finished },
      { new: true, runValidators: true }
    );

    if(!finishedSave) return res.status(404).json({error: 'Todo Not Found.'})

    res.status(200).json(finishedSave);
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: "Internal server error" });
  }
});

todosRouter.delete("/:id", async (req, res) => {
  try {

    const finishedDelete = await Todo.findByIdAndDelete({id : req.params.id});
    res.status(200).json(finishedDelete);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default todosRouter;
