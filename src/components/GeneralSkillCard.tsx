import { FunctionComponent } from "react";
import { GeneralSkill } from "../data/generalSkills";

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
    <div className="flex items-center p-2 space-x-4 rounded-lg bg-lightPurple font-dina">
      <Icon className="w-12 h-12 text-orange" />
      <div className="">
        <h6 className="font-bold text-newGray">{title}</h6>
        <p className="text-newGray" dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default GeneralSkill;
