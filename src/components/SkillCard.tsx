import React from "react";
import { Skill } from "../data/skills"; // Import your skill data

interface SkillProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillProps> = ({ skill }) => {
  const { Icon, name } = skill;

  return (
    <div className="flex-col items-center justify-center mx-2 mt-2">
      <div className="flex items-center justify-center w-10 h-10 text-purple">
        <Icon className="w-10 h-10" />
      </div>
      <p className="text-sm text-center text-gray-500">{name}</p>
    </div>
  );
};

export default SkillCard;
