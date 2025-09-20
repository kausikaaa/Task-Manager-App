import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../utils/api";
import TaskForm from "../components/TaskForm";

export default function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      const res = await api.get("/tasks");
      const found = res.data.find((t) => t._id === id);
      setTask(found);
    };
    fetchTask();
  }, [id]);

  const handleUpdate = async (data) => {
    await api.put(`/tasks/${id}`, data);
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Task</h2>
      {task && <TaskForm onSubmit={handleUpdate} initialData={task} />}
    </div>
  );
}
