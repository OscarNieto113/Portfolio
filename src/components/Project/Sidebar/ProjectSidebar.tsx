import React, { ChangeEvent } from "react";
import Filter from "./Filter";
import {
  languagesAndTools,
  databases,
  librariesAndFrameworks,
  others,
} from "../../../data/skills"; // Import your data

interface SidebarProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ProjectSidebar: React.FC<SidebarProps> = ({ handleChange }) => {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>
      <Filter
        handleChange={handleChange}
        skills={languagesAndTools}
        tittleFilter="Test1"
      />
      <Filter
        handleChange={handleChange}
        skills={librariesAndFrameworks}
        tittleFilter="Test2"
      />
      <Filter
        handleChange={handleChange}
        skills={databases}
        tittleFilter="Test3"
      />
      <Filter
        handleChange={handleChange}
        skills={others}
        tittleFilter="Test4"
      />
    </section>
  );
};

export default ProjectSidebar;
