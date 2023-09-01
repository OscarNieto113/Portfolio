import { ChangeEvent, MouseEventHandler, useState } from "react";
import FilteredProjects from "@/components/Project/FilteredProjects";
import {projects, Project} from "../data/projects"
import ProjectFilterRecomended from "@/components/Project/ProjectFilterRecomended";
import ProjectSidebar from "@/components/Project/Sidebar/ProjectSidebar";
import ProjectCard from "@/components/Project/ProjectCard";


const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const filteredItems = projects.filter(
    (project) => project.nameProject.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    setSelectedCategory(event.currentTarget.value);
  };

  function filteredData(projects: Project[], selected: string | null, query: string) {
    let filteredProjects = projects;

    // Filtering Input Items
    if (query) {
      filteredProjects = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProjects = filteredProjects.filter(
        ({ nameProject, languagesAndTools }) => {
          const foundLanguage = languagesAndTools.find(
            (skill) => skill.name === selected
          );
          return foundLanguage !== undefined;
        }
      );
    }

    return filteredProjects.map((project) => (
      <ProjectCard key={project.id} project={project} /> // Render ProjectCard component
    ));
  }

  const result = filteredData(projects, selectedCategory, query);

  return (
    <>
      <ProjectSidebar handleChange={handleChange} />
      <ProjectFilterRecomended handleClick={handleClick} />
      <FilteredProjects result={result} />
    </>
  );
}

export default Projects;