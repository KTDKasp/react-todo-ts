import React from 'react';
import axios from 'axios';

import { SidebarList } from './components/SidebarList';
import { COLORS_PREFIX, LISTS_PREFIX, TASKS_PREFIX } from './API/urls';
import { IList } from './interfaces/lists.interface';
import { ITask } from './interfaces/tasks.interface';
import { IColor } from './interfaces/colors.interface';

import './App.css';
import { TasksList } from './components/TasksList';

export const App: React.FC = () => {
  const [lists, setLists] = React.useState<IList[]>([]);
  const [tasks, setTasks] = React.useState<ITask[]>([]);
  const [colors, setColors] = React.useState<IColor[]>([]);
  const [activeList, setActiveList] = React.useState<IList>({} as IList);

  React.useEffect(() => {
    const fetchLists = async () => {
      try {
        const { data } = await axios.get(`${LISTS_PREFIX}?_relations=colors`);
        console.log(data);

        setLists(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchLists();
  }, []);

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
  }, []);

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
  }, []);

  const onAddFolder = async (obj: { name: string; color_id: number }) => {
    const { data } = await axios.post(LISTS_PREFIX, {
      ...obj,
      color: colors.find((color) => color.id === obj.color_id),
    });
    setLists((prev) => [...prev, data]);
  };

  const onRemoveFolder = async (id: number) => {
    setLists((prev) => prev.filter((list) => list.id !== id));
    await axios.delete(`${LISTS_PREFIX}/${id}`);
  };

  const taskListCheck = (id: number) => {
    const taskList = lists.find(list => list.id === id);
    if (taskList) {
      setActiveList(taskList);
    }
  }

  // #TODO: Исправить поведение тасков при первом рендере
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <SidebarList
          onAddFolder={onAddFolder}
          items={lists}
          onRemove={(id: number) => onRemoveFolder(id)}
          taskList={(id: number) => taskListCheck(id)}
        />
      </div>
      <div className="todo__tasks">
        <TasksList tasks={tasks} list={activeList} />
      </div>
    </div>
  );
};
