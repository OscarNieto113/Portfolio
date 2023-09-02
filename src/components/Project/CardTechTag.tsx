import React, { FunctionComponent } from "react";

interface CardTechTagProps {
  tech: string;
}

const CardTechTag: FunctionComponent<CardTechTagProps> = ({ tech }) => {
  return (
    <span
      key={tech}
      className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200"
    >
      {tech}
    </span>
  );
};

export default CardTechTag;
