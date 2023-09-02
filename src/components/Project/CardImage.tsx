import React, { FunctionComponent, useState } from "react";
import Image from "next/image";

interface ProjectCardImageProps {
  imgPath: string;
  nameProject: string;
}

const ProjectCardImage: FunctionComponent<ProjectCardImageProps> = ({
  imgPath,
  nameProject,
}) => {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => setShowDetail(!showDetail);

  const imageProps = {
    src: imgPath,
    alt: nameProject,
    layout: "responsive",
    height: 150,
    width: 300,
  };

  return (
    <div>
      <Image
        {...imageProps}
        className="cursor-pointer"
        onClick={toggleDetail}
      />
      {showDetail && (
        // Render the details here (moved to ProjectCardDetails component)
      )}
    </div>
  );
};

export default ProjectCardImage;
