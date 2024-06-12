import React from 'react';
import { ITask } from '../../interfaces/tasks.interface';
import { IList } from '../../interfaces/lists.interface';
import './TasksList.css';

export interface TasksListProps {
  tasks: ITask[];
  list: IList;
}

export const TasksList: React.FC<TasksListProps> = ({ tasks, list }) => {
  return (
    <div className="tasks">
      <header className="tasks__header">
        <h2 className="tasks__title">{list?.name}</h2>
        <button className="tasks__title-edit">
          <img src="./svg/pencil.svg" alt="Edit icon" />
        </button>
      </header>
      <div className="tasks__items">
        {tasks.filter(task => task.list_id === list.id).map((task) => (
          <div key={task.id} className="tasks__item">
            <div className="checkbox">
              <input className="checkbox__input" type="checkbox" id={`task-${task.id}`} />
              <label className="checkbox__label" htmlFor={`task-${task.id}`}>
                <svg
                  width="11"
                  height="8"
                  viewBox="0 0 11 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                    stroke="#000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </label>
            </div>
            <input className="tasks__item-text" value={task.text} />
            <button className="list__remove-item">
              <img src="./svg/delete.svg" alt="Remove icon" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
