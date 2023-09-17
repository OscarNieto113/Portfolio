import React, { FunctionComponent } from "react";
import { Skill } from "../../data/skills";

interface CardTechTagProps {
  techs: Set<Skill>;
}

const CardTechTag: FunctionComponent<CardTechTagProps> = ({ techs }) => {
  const techsArray = Array.from(techs);
  const displayedTechs = techsArray.slice(0, 4);
  const showMore = techsArray.length > 4;

  return (
    <div className="inline-flex flex-wrap items-center gap-2 mx-2 my-2 group">
      <div className="flex gap-1">
        {displayedTechs.map((tech) => (
          <div key={tech.id} className="p-1 rounded-full bg-newGray">
            {tech.Icon && <tech.Icon className="w-6 h-6" />}{" "}
          </div>
        ))}
        {showMore && (
          <div className="p-1 rounded-full bg-newGray">
            +{techsArray.length - 4} more
          </div>
        )}
      </div>
    </div>
  );
};

export default CardTechTag;
