import React from 'react';
import './AddTodoFolderButton.css';

const colorList: { color: string; id: number }[] = [
  { color: '#FF6464', id: 1 },
  { color: '#42B883', id: 2 },
  { color: '#64C4ED', id: 3 },
  { color: '#FFBBCC', id: 4 },
  { color: '#B6E6BD', id: 5 },
  { color: '#C355F5', id: 6 },
  { color: '#09011A', id: 7 },
];

export const AddTodoFolderButton: React.FC<{
  onAddFolder: (obj: { name: string; colorId: number }) => void;
}> = ({ onAddFolder }) => {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [selectedColor, setSelectedColor] = React.useState(1);
  const [inputValue, setInputValue] = React.useState<string>('');

  const handleClick = () => {
    setIsPopupOpen((prev) => !prev);
  };

  const onClickColor = (id: number) => {
    setSelectedColor(id);
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onClickAddFolder = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputValue) {
      onAddFolder({ name: inputValue, colorId: selectedColor });
      console.log({ name: inputValue, colorId: selectedColor });
      setIsPopupOpen(false);
      setInputValue('');
    } else {
      console.log('Название папки не может быть пустым');
      return;
    }
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
              value={inputValue}
              onChange={onChangeInput}
              className="input__field"
              type="text"
              placeholder="Название папки"
            />
            <div className="choose__color">
              <ul className="color__list">
                {colorList.map((item) => (
                  <li
                    onClick={() => onClickColor(item.id)}
                    className={`color ${
                      selectedColor === item.id ? 'active' : ''
                    }`}
                    key={item.id}
                    style={{ backgroundColor: item.color }}
                  ></li>
                ))}
              </ul>
              <button className="color__palette">
                <img src="./svg/palette.svg" alt="Palette icon" />
              </button>
            </div>
            <button onClick={onClickAddFolder} className="add__folder">
              Добавить
            </button>
          </form>
        </div>
      )}
    </>
  );
};
