import React, { FunctionComponent } from "react";
import { Project } from "@/data/projects";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { Skill } from "@/data/skills";
import SkillsList from "@/components/SkillList";
import UrlButton from "@/components/UrlButton";

interface ProjectCardDetailsProps {
  project: Project;
  toggleDetail: () => void;
  techs: Set<Skill>;
}

const getCategoryBadge = (category: string, index: number) => (
  <span
    key={index}
    className="inline-block px-2 py-1 mr-2 text-white rounded-md bg-purple"
  >
    {category}
  </span>
);

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
          <UrlButton
            href={project.urlGithub}
            label="Github"
            ariaLabel={`GitHub link for ${project.nameProject}`}
            icon={AiFillGithub}
          />
          {project.urlDeploy && (
            <UrlButton
              href={project.urlDeploy}
              label="Live Project"
              ariaLabel={`Live project link for ${project.nameProject}`}
              icon={AiFillProject}
            />
          )}
        </div>
      </div>

      <div>
        <h2 className="mb-3 text-xl font-medium md:text-2xl text-orange">
          {project.nameProject}
        </h2>
        <h3 className="mb-3 font-medium">{project.description}</h3>

        <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
          <SkillsList
            skills={techsArray}
            title="Technologies used in this Project"
          />
        </div>

        <div className="flex flex-wrap justify-end mt-5 space-x-2 text-sm tracking-wider">
          <div className="mb-3">
            {project.category.map((category, index) =>
              getCategoryBadge(category, index)
            )}
          </div>
        </div>
      </div>

      <button
        onClick={toggleDetail}
        className="absolute p-1 bg-white rounded-full cursor-pointer top-3 right-3 focus:outline-none dark:bg-orange hover:scale-125"
      >
        <MdClose size={30} />
      </button>
    </div>
  );
};

export default ProjectCardDetails;
