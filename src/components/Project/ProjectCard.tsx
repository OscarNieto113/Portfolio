import React, { FunctionComponent, useState } from "react";
import ProjectCardImage from "./CardImage";
import ProjectCardDetails from "./CardDetails";
import CardTechTag from "./CardTechTag";
import { Project } from "@/data/projects";
import { Skill } from "../../data/skills";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ project }) => {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => setShowDetail(!showDetail);

  return (
    <div>
      <ProjectCardImage
        project={project}
        showDetail={showDetail}
        toggleDetail={toggleDetail}
      />
      {showDetail && (
        <ProjectCardDetails
          project={project}
          toggleDetail={toggleDetail}
        />
      )}
    </div>
  );
};

export default ProjectCard;
