import { TaskProvider } from './TaskContext';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import './TodoList.css';
function TodoList() {
  return (
    <div className="todo-container">
      {/* Wrapping components with TaskProvider so they can access shared task state */}
      <TaskProvider>
        {/* Component to input a new task */}
        <TaskInput />
        {/* Component to display the list of tasks */}
        <TaskList />
      </TaskProvider>
    </div>
  );
}
export default TodoList;
