import { ReactElement } from "react";
import { IconType } from "react-icons";

type PropsType = {
  link: string;
  name: string;
  icon: IconType;
};

const SocialMedia = ({ link, name, icon }: PropsType): ReactElement => {
  const IconComponent = icon;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <IconComponent className="w-8 h-8 cursor-pointer focus:outline-none hover:scale-125" /> {name}
    </a>
  );
};

export default SocialMedia;
