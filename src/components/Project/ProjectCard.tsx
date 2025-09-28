import React, { FunctionComponent, useState } from "react";
import CardTechTag from "./CardTechTag";
import ProjectCardDetails from "./CardDetails";
import CardCategoryTag from "./CardCategoryType";
import { Project } from "@/data/projects";
import Modal from "@/components/Modal";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ project }) => {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => setShowDetail(!showDetail);

  return (
    <>
      <Card key={project.id} className="w-full max-w-[26rem] shadow-lg ">
        <CardHeader floated={false} color="blue-gray">
          <img
            src={project.imgPath}
            alt={project.nameProject}
            className="w-full max-h-48 md:max-h-50"
          />
          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          <CardCategoryTag category={project.category} />
        </CardHeader>

        <CardBody>
  <div className="mx-3 flex items-center justify-between">
    <h3 className="my-1 text-2xl font-bold">{project.nameProject}</h3>
    {project.developedAtIcon && (
      <div className="flex items-center gap-2 ml-4">
        <img
          src={project.developedAtIcon}
          alt={`${project.developedAt} logo`}
          className="w-6 h-6 rounded-full object-contain"
        />
        <span className="text-xs text-gray-600 dark:text-gray-400">
          Developed at <strong>{project.developedAt}</strong>
        </span>
      </div>
    )}
  </div>

  <p className="mx-4 mt-2 overflow-hidden text-ellipsis max-h-[4rem]">
    {project.description}
  </p>

  <CardTechTag techs={project.allSkills} />
</CardBody>
        <CardFooter className="flex pt-3">
          <div className="w-32 mx-5 mb-3 ml-auto">
            <Button
              size="lg"
              fullWidth={true}
              className="cursor-pointer bg-lightPurple text-newGray focus:outline-none hover:scale-110"
              onClick={toggleDetail}
            >
              View Details
            </Button>
          </div>
        </CardFooter>
      </Card>

      <Modal isOpen={showDetail} onClose={toggleDetail}>
        <ProjectCardDetails
          project={project}
          toggleDetail={toggleDetail}
          techs={project.allSkills}
        />
      </Modal>
    </>
  );
};

export default ProjectCard;
