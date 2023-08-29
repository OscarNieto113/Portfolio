import { ReactElement } from "react";
import { IconType } from "react-icons";

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
