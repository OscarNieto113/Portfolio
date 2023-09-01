import React, { MouseEventHandler } from "react";
import ProjectButton from "../Project/ProjectButton";

interface RecommendedProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const ProjectFilterRecomended: React.FC<RecommendedProps> = ({ handleClick }) => {
  return (
    <div className="ml-20">
      <h2 className="mt-4 mb-4 text-2xl">Recommended</h2>
      <div className="flex">
        <ProjectButton
          onClickHandler={handleClick}
          value=""
          title="All Projects"
        />
        <ProjectButton
          onClickHandler={handleClick}
          value="Artificiall Intelligence"
          title="Artificiall Intelligence"
        />
        <ProjectButton
          onClickHandler={handleClick}
          value="Web"
          title="Web"
        />
      </div>
    </div>
  );
};

export default ProjectFilterRecomended;
