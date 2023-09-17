import React, { FunctionComponent } from "react";
import { Skill } from "../../data/skills";

interface CardTechTagProps {
  techs: Skill[];
}

const CardTechTag: FunctionComponent<CardTechTagProps> = ({
  techs,
}) => {
  const displayedTechs = techs.slice(0, 4);

  return (
    <div className="inline-flex flex-wrap items-center gap-2 mx-2 my-2 group">
      <div className="flex gap-1">
        {displayedTechs.map((tech) => (
          <div key={tech.id} className="p-1 rounded-full bg-newGray">
            {tech.Icon && <tech.Icon className="w-6 h-6" />}{" "}
            {/* Use the Icon component if available */}
          </div>
        ))}
        {techs.length > 4 && (
          <div className="p-1 rounded-full bg-newGray">
            +{techs.length - 4} more
          </div>
        )}
      </div>
    </div>
  );
};

export default CardTechTag;
