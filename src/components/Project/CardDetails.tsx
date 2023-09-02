import React, { FunctionComponent } from "react";
import { Project } from "@/data/projects";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import CardTechTag from "./CardTechTag";
import Image from "next/image";

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
      <CardTechTag key={tech} tech={tech} />
    ));
  };

  return (
    <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
      <div>
        <Image
          src={project.imgPath}
          alt={project.nameProject}
          layout="responsive"
          height={150}
          width={300}
        />
        <div className="flex justify-center my-4 space-x-3">
          <a
            href={project.urlGithub}
            className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
          >
            <AiFillGithub /> <span>Github</span>
          </a>
          <a
            href={project.urlDeploy}
            className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
          >
            <AiFillProject /> <span>Project</span>
          </a>
        </div>
      </div>

      <div>
        <h2 className="mb-3 text-xl font-medium md:text-2xl">
          {project.nameProject}
        </h2>
        <h3 className="mb-3 font-medium">{project.description}</h3>
        <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
          {renderTechTags(project.languagesAndTools)}
          {renderTechTags(project.librariesAndFrameworks)}
          {renderTechTags(project.databases)}
          {renderTechTags(project.others)}
        </div>
      </div>

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
