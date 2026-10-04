import { useTasks } from './TaskContext';

function TaskInput() {
	const { task, setTask, addTask } = useTasks();
	return (
		<div className="todo-input-wrapper">
			<input
				type="text"
				value={task}
				onChange={(e) => setTask(e.target.value)}
				placeholder = "Enter a task"
			/>
			<button onClick={addTask}>Add</button>
		</div>
	)
}

export default TaskInput;
