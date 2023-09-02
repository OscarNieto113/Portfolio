import React, { FunctionComponent } from "react";
import { Project } from "@/data/projects";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";

interface ProjectCardDetailsProps {
  project: Project;
  toggleDetail: () => void;
}

const ProjectCardDetails: FunctionComponent<ProjectCardDetailsProps> = ({
  project,
  toggleDetail,
}) => {
  const renderTechTags = (techList: string[]) => {
    return techList.map((tech) => (
      <span
        key={tech}
        className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200"
      >
        {tech}
      </span>
    ));
  };

  return (
    <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
      {/* Project details content */}
      <button
        onClick={toggleDetail}
        className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
      >
        <MdClose size={30} />
      </button>
    </div>
  );
};

export default ProjectCardDetails;
