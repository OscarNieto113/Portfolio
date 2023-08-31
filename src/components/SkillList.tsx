import React from "react";
import SkillCard from "./SkillCard";
import { Skill } from "../data/skills"; // Import your skill data

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
