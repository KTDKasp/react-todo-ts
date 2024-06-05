import React from 'react';
import { ITodoListItems } from '../App';

type SidebarListProps = {
  items: ITodoListItems[];
};

export const SidebarList: React.FC<SidebarListProps> = ({ items }) => {
  const [toggleActive, setToggleActive] = React.useState(false);

  const handleClick = () => {
    setToggleActive((prev) => !prev);
  };

  return (
    <ul className="sidebar__list">
      <li
        onClick={handleClick}
        className={`list__item all-todos ${toggleActive ? 'active' : ''}`}
      >
        <img src="./svg/list.svg" alt="List icon" />
        <p>Все задачи</p>
      </li>
      {items.map((item) => (
        <li onClick={handleClick} className={`list__item todo__folders`}>
          <span className='badge' style={{ backgroundColor: item.color }}></span>
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};
