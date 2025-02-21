import { useState } from 'react';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask('');
    }
  };

  return (
    <div className="p-4">
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        className="border p-2 mr-2"
      />
      <button onClick={addTask} className="bg-blue-500 text-white p-2">Add Task</button>
      <ul>
        {tasks.map((t) => (
          <li key={t.id} className="p-2 border-b">{t.text}</li>
        ))}
      </ul>
    </div>
  );
}
