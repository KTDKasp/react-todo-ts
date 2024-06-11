import React from 'react';
import axios from 'axios';

import { SidebarList } from './components/SidebarList';
import { COLORS_PREFIX, LISTS_PREFIX, TASKS_PREFIX } from './API/urls';
import { IList } from './interfaces/lists.interface';
import { ITask } from './interfaces/tasks.interface';
import { IColor } from './interfaces/colors.interface';

import './App.css';

export const App: React.FC = () => {
	const [lists, setLists] = React.useState<IList[]>([]);
	const [tasks, setTasks] = React.useState<ITask[]>([]);
	const [colors, setColors] = React.useState<IColor[]>([]);

	React.useEffect(() => {
		const fetchLists = async () => {
			try {
				const { data } = await axios.get<IList[]>(LISTS_PREFIX);
				setLists(data);
			} catch (e) {
				console.error(e);
			}
		};
		fetchLists();
	}, [])

	React.useEffect(() => {
		const fetchTasks = async () => {
			try {
				const { data } = await axios.get<ITask[]>(TASKS_PREFIX);
				setTasks(data);
			} catch (e) {
				console.error(e);
			}
		};
		fetchTasks();
	}, [])

	React.useEffect(() => {
		const fetchColors = async () => {
			try {
				const { data } = await axios.get<IColor[]>(COLORS_PREFIX);
				setColors(data);
			} catch (e) {
				console.error(e);
			}
		};
		fetchColors();
	}, [])

	const onAddFolder = async (obj: { name: string, colorId: number }) => {
		const { data } = await axios.post(LISTS_PREFIX, obj);
		setLists(prev => [...prev, data]);
	}

	return (
		<div className="todo">
			<div className="todo__sidebar">
				<SidebarList onAddFolder={onAddFolder} items={
					lists.map(list => {
						list.color = colors.find(color => color.id === list.colorId)?.hex || '';
						return list
					})
				} />
			</div>
			<div className="todo__tasks">
				{
					tasks.map(task => (
						<div key={task.id}>{task.text}</div>
					))
				}
			</div>
		</div>
	);
};
