import React from 'react';

import { SidebarList } from './components/SidebarList';

import './App.css';

export interface ITodoListItems {
	color: string;
	name: string;
}

const todoListItems: ITodoListItems[] = [
	{color: '#42B883', name: 'Покупки'},
	{color: '#64C4ED', name: 'Фронтенд'},
	{color: '#FFBBCC', name: 'Фильмы и сериалы'},
	{color: '#B6E6BD', name: 'Книги'},
]

export const App: React.FC = () => {

	const [todos, setTodos] = React.useState<ITodoListItems[]>([]);

	React.useEffect(() => {
		setTodos(todoListItems);
	}, [])

	return (
		<div className="todo">
			<div className="todo__sidebar">
				<SidebarList items={todos} />
			</div>
			<div className="todo__tasks">
				<button>btn</button>
			</div>
		</div>
	);
};
