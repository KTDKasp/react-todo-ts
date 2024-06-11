import React from 'react';
import { AddTodoFolderButton } from '../AddTodoFolderButton';
import './SidebarList.css';
import { IList } from '../../interfaces/lists.interface';

export interface SidebarListProps {
  items: IList[];
  onAddFolder: (obj: { name: string, colorId: number }) => void;
} 

export const SidebarList: React.FC<SidebarListProps> = ({ items, onAddFolder }) => {
  const [toggleActive, setToggleActive] = React.useState(false);

  const handleClick = () => {
    setToggleActive((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`all-todos ${toggleActive ? 'active' : ''}`}
      >
        <img src="./svg/list.svg" alt="List icon" />
        <p>Все задачи</p>
      </button>
      <ul className="sidebar__list">
        {items.map((item) => (
          <li
            key={item.id}
            onClick={handleClick}
            className="list__item todo__folders"
          >
            <span
              className="badge"
              style={{ backgroundColor: item.color }}
            ></span>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
      <AddTodoFolderButton onAddFolder={(obj) => onAddFolder(obj)} />
    </>
  );
};
