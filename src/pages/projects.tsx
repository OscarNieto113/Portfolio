import React, { useState } from "react";
import ProjectCard from "../components/Project/ProjectCard";
import { projects as projectsData } from "../data/projects";
import  FilterDropdown  from "@/components/Project/FilterDropdown";
import { generalSkills, GeneralSkill } from "../data/generalSkills";

// Extract unique category values from generalSkills
const categories: string[] = Array.from(
  new Set(generalSkills.map((skill: GeneralSkill) => skill.title))
);

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleSelectFilter = (selectedFilters: string[]) => {
    setSelectedFilters(selectedFilters);

    // Apply selected filters to the projects.
    if (selectedFilters.length === 0) {
      setProjects(projectsData);
      setActive("all");
    } else {
      const filteredProjects = projectsData.filter((project) =>
        selectedFilters.every((filter) => project.category.includes(filter))
      );
      setProjects(filteredProjects);
      setActive("filtered");
    }
  };

  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
      <FilterDropdown
        categories={categories}
        selectedFilters={selectedFilters}
        onSelectFilter={handleSelectFilter}
      />

      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project) => (
          <div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
            <ProjectCard project={project} key={project.nameProject} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;