import React from 'react';
import './App.css';

export const App: React.FC = () => {
	const [toggleActive, setToggleActive] = React.useState(false);

	const handleClick = () => {
		setToggleActive(prev => !prev);
	}

	return (
		<div className="todo">
			<div className="todo__sidebar">
				<ul className="sidebar__list">
					<li onClick={handleClick} className={`list__item all-todos ${toggleActive ? 'active' : ''}`}>
						<img src="./svg/list.svg" alt="List icon" />
						<p>Все задачи</p>
					</li>
					<li onClick={handleClick} className={`list__item todo__folders`}>
						<svg
							width="10"
							height="10"
							viewBox="0 0 10 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="5" cy="5" r="5" fill="#42B883" />
						</svg>
						<p>Покупки</p>
					</li>
				</ul>
			</div>
			<div className="todo__tasks">
				<button>btn</button>
			</div>
		</div>
	);
};
