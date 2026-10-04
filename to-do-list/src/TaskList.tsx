import { useState, useEffect } from 'react';
import { useTasks } './TaskContext';

function TaskList() {
	const { tasks, removeTask } = useTasks();
	const [message, setMessage] = useState('');

	useEffect(() => {
		setMessage(`You have ${tasks.length} task(s).`);
	}, [tasks]);
	
	return (
		<div>
			<p>{message}</p>
			<ul>
				{tasks.map((t, index) => (
					<li key={index}>
						(t)
						<button onClick={() => removeTask(index)}>delete</button>
					</li>	
        ))}
			</ul>
		</div>
	)
}
