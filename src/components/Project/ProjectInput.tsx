import React, { ChangeEvent } from 'react';

interface InputProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  title: string;
  name: string;
  color?: string;
}

const ProjectInput: React.FC<InputProps> = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

export default ProjectInput;