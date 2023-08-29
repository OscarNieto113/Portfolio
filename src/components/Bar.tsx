import { FunctionComponent } from 'react';

import { Skill } from '../data/skills';

const Bar: FunctionComponent<{ value: Skill }> = ({
  value: { Icon, level, name },
}) => {
  const barWidth = `${level}%`;

  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-black-500">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-orange to-orange-500"
        style={{ width: barWidth }}
        aria-label={`${name} Skill Level: ${level}%`}
      >
        <Icon className="mr-3" /> {name}
      </div>
    </div>
  );
};

export default Bar