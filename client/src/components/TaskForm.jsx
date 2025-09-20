import { useState, useEffect } from "react";

export default function TaskForm({ onSubmit, initialData }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (initialData) setTitle(initialData.title);
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type="submit">{initialData ? "Update" : "Add"} Task</button>
    </form>
  );
}
