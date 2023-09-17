import React, { FunctionComponent } from "react";
import { Project } from "@/data/projects";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { Skill } from "@/data/skills";
import SkillsList from "../SkillList";

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
    <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 rounded-md bg-newGray text-purple md:grid-cols-2 gap-x-12 dark:text-newGray dark:bg-dark-100">
      <div>
        <Image
          src={project.imgPath}
          alt={project.nameProject}
          layout="responsive"
          height={150}
          width={300}
          className="rounded-md"
        />
        <div className="flex justify-center my-4 space-x-3">
          <a
            href={project.urlGithub}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 rounded-md cursor-pointer dark:bg-dark-200 focus:outline-none hover:scale-110"
          >
            <AiFillGithub /> <span>Github</span>
          </a>
          <a
            href={project.urlDeploy}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 rounded-md cursor-pointer dark:bg-dark-200 focus:outline-none hover:scale-110"
          >
            <AiFillProject /> <span>Live Project</span>
          </a>
        </div>
      </div>

      <div>
        <h2 className="mb-3 text-xl font-medium md:text-2xl text-orange">
          {project.nameProject}
        </h2>
        <h3 className="mb-3 font-medium">{project.description}</h3>

        <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
        <SkillsList skills={techsArray} title="Technologies used in the Project" />
        </div>
      </div>

      <button
        onClick={toggleDetail}
        className="absolute p-1 bg-white rounded-full cursor-pointer top-3 right-3 focus:outline-none dark:bg-orange hover:scale-125"
      >
        <MdClose size={30}  />
      </button>
    </div>
  );
};

export default ProjectCardDetails;
