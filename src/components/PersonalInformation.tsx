import { ReactElement } from "react";
import { IconType } from "react-icons";

/**
 * Represents a block of personal information.
 *
 * @component
 *
 * @param {object} props - The component's props.
 * @param {string} props.description - The personal information description.
 * @param {IconType} props.icon - The icon component for the personal information.
 *
 * @returns {React.ReactElement} A React element representing personal information.
 */
type PropsType = {
  description: string;
  icon: IconType;
};

const PersoalInformation = ({
    description,
  icon,
}: PropsType): ReactElement => {
  const IconComponent = icon;

  return (
    <div className="flex items-center justify-center">
      <IconComponent className="mr-2" />{" "}
      <p>
        <span>{description}</span>
      </p>
    </div>
  );
};

export default PersoalInformation;
