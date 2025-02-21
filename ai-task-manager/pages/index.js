import TaskList from '../components/TaskList';
import AIChat from '../components/AIChat';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">AI Task Manager</h1>
      <TaskList />
      <AIChat />
    </div>
  );
}
