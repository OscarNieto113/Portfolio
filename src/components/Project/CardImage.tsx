import React, { FunctionComponent } from "react";
import { Project } from "@/data/projects";
import Image from "next/image";

interface ProjectCardImageProps {
  project: Project;
  showDetail: boolean;
  toggleDetail: () => void;
}

const ProjectCardImage: FunctionComponent<ProjectCardImageProps> = ({
  project,
  showDetail,
  toggleDetail,
}) => {
  const imageProps = {
    src: project.imgPath,
    alt: project.nameProject,
    layout: "responsive",
    height: 150,
    width: 300,
  };

  return (
    <Image
      {...imageProps}
      className={`cursor-pointer ${showDetail ? "opacity-50" : ""}`}
      onClick={toggleDetail}
    />
  );
};

export default ProjectCardImage;
