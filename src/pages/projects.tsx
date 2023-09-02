import React, { useState } from "react";
import ProjectCard from "../components/Project/ProjectCard";
import FilterDropdown from "@/components/Project/FilterDropdown";
import { projects as projectsData } from "../data/projects";
import { generalSkills, GeneralSkill } from "../data/generalSkills";

// Extract unique category values from generalSkills
const categories: string[] = Array.from(
  new Set(generalSkills.map((skill: GeneralSkill) => skill.title))
);

const Projects = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleSelectFilter = (selectedFilters: string[]) => {
    setSelectedFilters(selectedFilters);
  };

  const filterProjects = (selectedFilters: string[]) => {
    if (selectedFilters.length === 0) {
      return projectsData;
    } else {
      return projectsData.filter((project) =>
        selectedFilters.every((filter) => project.category.includes(filter))
      );
    }
  };

  const filteredProjects = filterProjects(selectedFilters);

  return (
<div className="grid grid-cols-12 gap-4 mx-3 mt-2">
  <div className="col-span-12 md:col-span-3 lg:col-span-2">
    <FilterDropdown
      categories={categories}
      selectedFilters={selectedFilters}
      onSelectFilter={handleSelectFilter}
    />
  </div>

  <div className="relative grid grid-cols-12 col-span-12 gap-4 md:col-span-9">
    {filteredProjects.map((project) => (
      <div
        className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
        key={project.nameProject}
      >
        <ProjectCard project={project} />
      </div>
    ))}
  </div>
</div>

  );
};

export default Projects;