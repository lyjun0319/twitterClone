import React from 'react';
import { taskSt } from '@/app/_components/Task.css';

interface taskProp {
  task: {
    id: number;
    title: string;
    state?: boolean;
  };
  onArchiveTask?: boolean;
  onPinTask?: string;
}
export const Task = ({
  task: { id, title, state = false },
  onArchiveTask = false,
  onPinTask,
}: taskProp) => {
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} className={taskSt} />
    </div>
  );
};
