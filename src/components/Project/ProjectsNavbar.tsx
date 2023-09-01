import { FunctionComponent } from "react";
import ProjectNavItem from "./ProjectNavItem";
import { generalSkills, GeneralSkill } from "../../data/generalSkills";

// Extract unique category values from generalSkills
const categories: string[] = Array.from(
  new Set(generalSkills.map((skill: GeneralSkill) => skill.title))
);

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <ProjectNavItem value="all" {...props} />
      {categories.map((category) => (
        <ProjectNavItem
          key={category}
          value={category}
          handlerFilterCategory={props.handlerFilterCategory}
          active={props.active}
        />
      ))}
    </div>
  );
};

export default ProjectsNavbar;
