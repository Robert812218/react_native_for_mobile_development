import { createContext, useState, useContext } from 'react';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState([]);

  // State to hold the current input value for a new task
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <TaskContext.Provider
      value={{ tasks, task, setTask, addTask, removeTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}
