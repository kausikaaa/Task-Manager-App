import { useEffect, useState } from "react";
import api from "../utils/api";
import TaskList from "../components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const handleDelete = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>All Tasks</h2>
      <TaskList tasks={tasks} onDelete={handleDelete} />
    </div>
  );
}
