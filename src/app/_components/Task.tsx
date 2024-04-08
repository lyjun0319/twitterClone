import React from 'react';

interface taskProp {
  task: {
    id: number;
    title: string;
    state: boolean;
  };
  onArchiveTask?: boolean;
  onPinTask?: string;
}
export const Task = ({
  task: { id, title, state = false },
  onArchiveTask = false,
  onPinTask,
}: taskProp) => {
  console.log(onArchiveTask);
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  );
};
