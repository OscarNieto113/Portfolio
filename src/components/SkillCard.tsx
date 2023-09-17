import React from "react";
import { Skill } from "../data/skills"; // Import your skill data

/**
 * Represents a card displaying a specific skill.
 *
 * @component
 *
 * @param {object} props - The component's props.
 * @param {Skill} props.skill - The skill object to display.
 *
 * @returns {React.ReactElement} A React element representing the skill card.
 */
interface SkillProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillProps> = ({ skill }) => {
  const { Icon, name } = skill;

  return (
    <div className="flex flex-col items-center justify-center mx-2 mt-2">
      <div className="flex items-center justify-center w-10 h-10 text-purple ">
        {Icon && <Icon className="w-16 h-16" />}
      </div>
      <p className="mt-2 text-sm text-center text-purple">{name}</p>
    </div>
  );
};

export default SkillCard;
