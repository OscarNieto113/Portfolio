import { FunctionComponent } from "react";
import type { GeneralSkill } from "../data/generalSkills";

/**
 * Represents a component for displaying information about a general skill.
 *
 * @component
 *
 * @param {object} props - The component's props.
 * @param {GeneralSkill} props.service - The general skill object containing Icon, title, and about.
 *
 * @returns {React.ReactElement} A React element representing the general skill.
 */
const GeneralSkill: FunctionComponent<{ service: GeneralSkill }> = ({
  service: { Icon, title, about },
}) => {
  function createMarkup() {
    return {
      __html: about,
    };
  }

  return (
    <div className="flex flex-col md:flex-row items-center md:items-center justify-center p-4 space-x-0 md:space-x-4 rounded-lg bg-lightPurple font-dina max-w-lg mx-auto hover:shadow-lg hover:scale-105 transition-all">
      <div className="flex items-center justify-center w-20 h-20">
        <Icon className="w-10 h-10 text-orange" />
      </div>
      <div className="text-center md:text-left mt-2 md:mt-0">
        <h6 className="font-bold text-newGray mb-1">{title}</h6>
        <p className="text-newGray text-sm" dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default GeneralSkill;


