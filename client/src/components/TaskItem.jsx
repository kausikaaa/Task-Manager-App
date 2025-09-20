import { Link } from "react-router-dom";

export default function TaskItem({ task, onDelete }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem", borderBottom: "1px solid #ccc" }}>
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </span>
      <div>
        <Link to={`/edit/${task._id}`} style={{ marginRight: "0.5rem" }}>Edit</Link>
        <button onClick={() => onDelete(task._id)}>Delete</button>
      </div>
    </div>
  );
}
