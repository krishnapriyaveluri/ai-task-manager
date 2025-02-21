import { useEffect, useState } from 'react';
import TaskList from '../components/TaskList';
import AIChat from '../components/AIChat';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const ws = new WebSocket('wss://your-websocket-url');
    ws.onmessage = (event) => {
      const updatedTasks = JSON.parse(event.data);
      setTasks(updatedTasks);
    };

    return () => ws.close();
  }, []);

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, { id: tasks.length + 1, text: newTask }]);
      setNewTask('');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
      <input
        type="text"
        placeholder="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="p-2 border"
      />
      <button onClick={addTask} className="ml-2 bg-blue-500 text-white px-4 py-2">Add</button>
      
      <TaskList tasks={tasks} />
      <AIChat />
    </div>
  );
}
