import React from 'react';

import './AddTodoFolderButton.css';

const colorList: { color: string }[] = [
  { color: '#FF6464' },
  { color: '#42B883' },
  { color: '#64C4ED' },
  { color: '#FFBBCC' },
  { color: '#B6E6BD' },
  { color: '#C355F5' },
  { color: '#09011A' },
];

export const AddTodoFolderButton: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const handleClick = () => {
    setIsPopupOpen((prev) => !prev);
  };

  return (
    <>
      <button className="add__todo-folder" onClick={handleClick}>
        <img className="icon-badge" src="./svg/plus-mini.svg" alt="Plus icon" />
        <p>Добавить папку</p>
      </button>
      {isPopupOpen && (
        <div className="add__folder-popup">
          <button className="close__popup" onClick={handleClick}>
            <img src="./svg/close-black.svg" alt="Close icon" />
          </button>
          <form>
            <input
              className="folder__name"
              type="text"
              placeholder="Название папки"
            />
            <div className="choose__color">
              <ul className="color__list">
                {colorList.map((item, index) => (
                  <li
                    className="color"
                    key={index}
                    style={{ backgroundColor: item.color }}
                  ></li>
                ))}
              </ul>
              <button className="color__palette">
                <img src="./svg/palette.svg" alt="Palette icon" />
              </button>
            </div>
            <button className="add__folder">Добавить</button>
          </form>
        </div>
      )}
    </>
  );
};
