import { ChangeEvent, useState, KeyboardEvent } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './ArrayState.module.scss';

type Task = {
  id: string;
  text: string;
};

export const TodoListExample = () => {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const onChangeTaskText = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
  };

  const onKeyDownTaskText = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && taskText.trim() !== '') {
      addTask({ text: taskText });
      setTaskText('');
    }
  };

  const addTask = (task: Omit<Task, 'id'>) => {
    const newTask: Task = { ...task, id: uuid() };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div>
      <input
        type='text'
        value={taskText}
        onChange={onChangeTaskText}
        onKeyDown={onKeyDownTaskText}
        placeholder='Enter a task'
      />

      <ul className={styles.items}>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
};
