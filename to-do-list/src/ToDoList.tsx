import React, { useState, useEffect } from 'react';
import './ToDoList.css'; //  Importing the CSS file to style the component
function TodoList() {
  // State to store all tasks
  const [tasks, setTasks] = useState([]);
  // State to track the current input value
  const [input, setInput] = useState('');
  // State to hold a dynamic message (e.g., number of tasks in this case)
  const [message, setMessage] = useState('');
  // Function to add a new task to the task list
  const addTask = () => {
    // Only add non-empty (non-whitespace) tasks
    if (input.trim()) {
      setTasks([...tasks, input.trim()]); // Add the new task to the list
      setInput(''); // Clear the input field
    }
  };
  // Function to remove a task from the list by its index
  const removeTask = (index) => {
    // Keep all tasks except the one at the given index
    setTasks(tasks.filter((_, i) => i !== index));
  };
  // This useEffect updates the message whenever the `tasks` array changes
  useEffect(() => {
    setMessage(`You have ${tasks.length} task(s).`);
  }, [tasks]); // Dependency array ensures this runs only when `tasks` changes
  return (
    <div className="todo-container">
      {/* Input section with text input and add button */}
      <div className="todo-input-wrapper">
        <input
          value={input}
          onChange={e => setInput(e.target.value)} // Update `input` state as user types
          placeholder="Enter a task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      {/* Display message about number of tasks */}
      <p>{message}</p>
      {/* Render list of tasks */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {/* Task text */}
            {task}
            {/* Delete button */}
            <button onClick={() => removeTask(index)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList; // Exporting the component for use in App.js or elsewhere
