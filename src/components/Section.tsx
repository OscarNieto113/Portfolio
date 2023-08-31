import { ReactElement } from "react";

/**
 * Represents a section component.
 *
 * @component
 *
 * @param {object} props - The component's props.
 * @param {string} props.title - The title of the section.
 * @param {string} props.subTitle - The subtitle of the section.
 * @param {string} props.description - The description of the section.
 * @param {string} props.date - The date associated with the section.
 * @param {string} props.iconPath - The path to the icon for the section.
 *
 * @returns {React.ReactElement} A React element representing the section.
 */
type PropsType = {
  title: string;
  subTitle: string;
  description: string;
  date: string;
  iconPath: string;
};

const Section = ({
  title,
  subTitle,
  description,
  date,
  iconPath,
}: PropsType): ReactElement => {
  
  return (
    <div className="flex flex-col md:flex-row md:justify-between">
      <div>
        <h2 className="my-3 text-2xl font-bold">{title}</h2>
        <div className="flex items-center">
          <div className="mr-2">
            <img src={iconPath} alt="Icon" className="w-8 h-8" />
          </div>
          <h3 className="my-2 text-xl font-bold">{subTitle}</h3>
          <div className="ml-4 text-sm text-gray-500">{date}</div>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Section;
