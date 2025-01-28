import React, { useState, useEffect } from 'react';
import InputField from './components/molecules/InputField/InputField';
import './App.css';

const App = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const storedTasks = localStorage.getItem('tasks');
		console.log('Loaded from LocalStorage:', storedTasks);
		if (storedTasks) {
			try {
				const parsedTasks = JSON.parse(storedTasks);
				console.log('Parsed tasks:', parsedTasks);
				setTasks(parsedTasks);
			} catch (error) {
				console.error('Error parsing tasks from LocalStorage:', error);
			}
		}
	}, []);

	useEffect(() => {
		if (tasks.length > 0) {
			console.log('Saving to LocalStorage:', tasks);
			localStorage.setItem('tasks', JSON.stringify(tasks));
		}
	}, [tasks]);

	const handleAddTask = (task) => {
		setTasks((prevTasks) => [...prevTasks, task]);
	};

	const handleDeleteTask = (index) => {
		setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
	};

	return (
		<div className="app">
			<h1>To-Do List</h1>
			<InputField onAdd={handleAddTask} />
			<ul>
				{tasks.map((task, index) => (
					<li key={index}>
						{task}
						<button
							className="delete-button"
							onClick={() => handleDeleteTask(index)}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default App;
