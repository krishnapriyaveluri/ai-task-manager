export default function TaskList({ tasks }) {
    return (
      <ul className="mt-4">
        {tasks.map((task) => (
          <li key={task.id} className="p-2 border mb-2">{task.text}</li>
        ))}
      </ul>
    );
  }
  