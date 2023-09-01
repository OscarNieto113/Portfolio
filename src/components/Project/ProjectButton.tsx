import React, { MouseEventHandler } from 'react';

interface ButtonProps {
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
  value: string;
  title: string;
}

const Button: React.FC<ButtonProps> = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} value={value} className="btns">
      {title}
    </button>
  );
};

export default Button;
