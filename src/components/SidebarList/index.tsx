import React from 'react';
import { AddTodoFolderButton } from '../AddTodoFolderButton';
import { IList } from '../../interfaces/lists.interface';
import './SidebarList.css';

export interface SidebarListProps {
  items: IList[];
  onAddFolder: (obj: { name: string; color_id: number }) => void;
  onRemove: (id: number) => void;
  taskList: (id: number) => void;
}

export const SidebarList: React.FC<SidebarListProps> = ({
  items,
  onAddFolder,
  onRemove,
  taskList
}) => {
  const [activeListItem, setActiveListItem] = React.useState(0);

  const handleClick = (id: number) => {
    setActiveListItem(id);
    taskList(id);
  };

  return (
    <>
      {items.length > 0 ? (
        <>
          <button
            onClick={() => handleClick(0)}
            className={`all-todos ${activeListItem === 0 ? 'active' : ''}`}
          >
            <img src="./svg/list.svg" alt="List icon" />
            <p>Все задачи</p>
          </button>
          <ul className="sidebar__list">
            {items.map((item) => (
              <li
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`list__item ${
                  activeListItem === item.id ? 'active' : ''
                }`}
              >
                <span
                  className="badge"
                  style={{ backgroundColor: item.color?.hex }}
                ></span>
                <p>{item.name}</p>
                {item.id === activeListItem && (
                  <button onClick={() => onRemove(item.id)} className="list__remove-item">
                    <img src="./svg/delete.svg" alt="Remove icon" />
                  </button>
                )}
              </li>
            ))}
          </ul>
        </>
      ) : null}
      <AddTodoFolderButton onAddFolder={(obj) => onAddFolder(obj)} />
    </>
  );
};
