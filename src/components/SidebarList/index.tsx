import React from 'react';
import { ITodoListItems } from '../../App';
import './SidebarList.css';
import { AddTodoFolderButton } from '../AddTodoFolderButton';

type SidebarListProps = {
  items: ITodoListItems[];
};

export const SidebarList: React.FC<SidebarListProps> = ({ items }) => {
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
        {items.map((item, index) => (
          <li
            key={index}
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
      <AddTodoFolderButton />
    </>
  );
};
