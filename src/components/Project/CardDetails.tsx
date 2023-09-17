import React, { FunctionComponent } from "react";
import { Project } from "@/data/projects";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import CardTechTag from "./CardTechTag";
import Image from "next/image";
import { Skill } from "@/data/skills";

interface ProjectCardDetailsProps {
  project: Project;
  toggleDetail: () => void;
  techs: Set<Skill>;
}

const ProjectCardDetails: FunctionComponent<ProjectCardDetailsProps> = ({
  project,
  toggleDetail,
  techs,
}) => {
  const techsArray = Array.from(techs);
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
          <div className="inline-flex flex-wrap items-center gap-2 mx-2 my-2 group">
            <div className="flex gap-1">
              {techsArray.map((tech) => (
                <div key={tech.id} className="p-1 rounded-full bg-newGray">
                  {tech.Icon && <tech.Icon className="w-6 h-6" />}{" "}
                </div>
              ))}
            </div>
          </div>
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
