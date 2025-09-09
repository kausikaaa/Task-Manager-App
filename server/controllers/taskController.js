import Task from "../models/Task.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const { title } = req.body;
  if (!title) {
    res.status(400);
    throw new Error("Title is required");
  }

  const task = await Task.create({ title });
  res.status(201).json(task);
};

export const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  task.title = req.body.title || task.title;
  task.completed = req.body.completed ?? task.completed;

  const updatedTask = await task.save();
  res.json(updatedTask);
};

export const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  await task.deleteOne();
  res.json({ message: "Task removed" });
};
