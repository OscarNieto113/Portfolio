import React, { FunctionComponent, useState } from "react";
import CardTechTag from "./CardTechTag";
import ProjectCardDetails from "./CardDetails";
import { Project } from "@/data/projects";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ project }) => {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => setShowDetail(!showDetail);

  const allSkills = [
    ...project.languagesAndTools,
    ...project.librariesAndFrameworks,
    ...project.databases,
    ...project.others,
  ];

  return (
    <Card className="w-full max-w-[26rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img src={project.imgPath} alt={project.nameProject} />
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        <IconButton
          size="sm"
          color="red"
          variant="text"
          className="!absolute top-4 right-4 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </IconButton>
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between mx-3">
          <h3 className="my-1 text-2xl font-bold ">{project.nameProject}</h3>
        </div>
        <p className="mx-4 overflow-hidden text-ellipsis max-h-[4rem]">
          {project.description}
        </p>
        <div className="inline-flex flex-wrap items-center gap-2 mx-2 my-2 group">
          {allSkills.slice(1, 5).map((skill) => (
            <CardTechTag key={skill.id} tech={skill} />
          ))}
          {allSkills.length > 4 && (
            <Tooltip content={`+${allSkills.length - 4} more`}>
              <span className="p-3 rounded-full bg-newGray ">
                +{allSkills.length - 4}
              </span>
            </Tooltip>
          )}
        </div>
      </CardBody>
      <CardFooter className="pt-3">
        <Button size="lg" fullWidth={true}>
          Reserve
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
