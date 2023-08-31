import { ReactElement } from "react";
import { IconType } from "react-icons";

/**
 * Represents a social media icon component.
 *
 * @component
 *
 * @param {string} link - The link to the social media profile.
 * @param {string} name - The name of the social media platform.
 * @param {IconType} icon - The icon component from react-icons.
 *
 * @returns {ReactElement} A React element representing the social media icon with a link.
 */
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
