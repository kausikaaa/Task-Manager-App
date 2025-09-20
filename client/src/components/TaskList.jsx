import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task._id} task={task} onDelete={onDelete} />
        ))
      )}
    </div>
  );
}
