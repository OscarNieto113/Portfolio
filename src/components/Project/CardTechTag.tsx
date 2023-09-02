import React, { FunctionComponent } from "react";
import { Skill } from "../../data/skills";

interface CardTechTagProps {
  tech: Skill;
}

const CardTechTag: FunctionComponent<CardTechTagProps> = ({ tech }) => {
  return (
    <span
      className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200"
    >
      {tech.name}
    </span>
  );
};

export default CardTechTag;
