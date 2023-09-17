import React, { FunctionComponent, useState } from "react";
import CardTechTag from "./CardTechTag";
import ProjectCardDetails from "./CardDetails";
import { Project } from "@/data/projects";
import CardCategoryTag from "./CardCategoryType";

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

  const allSkills = new Set([
    ...project.languagesAndTools,
    ...project.librariesAndFrameworks,
    ...project.databases,
    ...project.others,
  ]);

  return (
    <>
      <Card key={project.id} className="w-full max-w-[26rem] shadow-lg ">
        <CardHeader floated={false} color="blue-gray">
          <img src={project.imgPath} alt={project.nameProject} />
          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          <CardCategoryTag category={project.category} />
        </CardHeader>
        <CardBody>
          <div className="flex items-center justify-between mx-3">
            <h3 className="my-1 text-2xl font-bold ">{project.nameProject}</h3>
          </div>
          <p className="mx-4 overflow-hidden text-ellipsis max-h-[4rem]">
            {project.description}
          </p>

          <CardTechTag techs={allSkills} />
        </CardBody>
        <CardFooter className="flex pt-3">
          <div className="w-32 mx-5 mb-3 ml-auto">
            <Button
              size="lg"
              fullWidth={true}
              className="cursor-pointer bg-lightPurple text-newGray focus:outline-none hover:scale-110"
              onClick={toggleDetail} // Agregar el evento onClick
            >
              View Details
            </Button>
          </div>
        </CardFooter>
      </Card>
      {showDetail && (
        <ProjectCardDetails
          project={project}
          toggleDetail={toggleDetail}
          techs={allSkills}
        />
      )}
    </>
  );
};

export default ProjectCard;
