import React from "react";
import SkillCard from "./SkillCard";
import { Skill } from "../data/skills";

/**
 * Represents a list of skills displayed as cards.
 *
 * @component
 *
 * @param {object} props - The component's props.
 * @param {Skill[]} props.skills - An array of skills to display.
 * @param {string} props.title - The title for the skills list.
 *
 * @returns {React.ReactElement} A React element representing the skills list.
 */
interface SkillsListProps {
  skills: Skill[];
  title: string;
}

const SkillsList: React.FC<SkillsListProps> = ({ skills, title }) => {
  return (
    <div>
      <h3 className="mt-3 text-xl font-bold">{title}</h3>
      <div className="flex flex-wrap">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
