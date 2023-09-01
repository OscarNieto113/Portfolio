import React, { ChangeEvent } from 'react';
import ProjectInput from "../ProjectInput";
import { Skill } from '../../../data/skills';

interface FilterProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  skills: Skill[];
  tittleFilter: string;
}

function Filter({ handleChange, skills, tittleFilter }: FilterProps) {
  return (
    <div>
      <h2 className="sidebar-title">{tittleFilter}</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        
        {skills.map((skill) => (
          <ProjectInput
            key={skill.id} // Use the skill id as the key
            handleChange={handleChange}
            value={skill.name.toLowerCase()} // Use the skill name as the value
            title={skill.name}
            name="test"
          />
        ))}
      </div>
    </div>
  );
}

export default Filter;