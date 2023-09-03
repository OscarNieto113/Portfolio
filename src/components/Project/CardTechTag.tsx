import React, { FunctionComponent } from "react";
import { Skill } from "../../data/skills";

interface CardTechTagProps {
  tech: Skill;
}

const CardTechTag: FunctionComponent<CardTechTagProps> = ({ tech }) => {
  const IconComponent = tech.Icon;

  return (
    <div className="p-3 rounded-full bg-newGray">
      <IconComponent className="w-5 h-5 cursor-pointer  focus:outline-none hover:scale-125" />
      </div>
  );
};

export default CardTechTag;
