import Link from "next/link";
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
 * @param {boolean} [newTab=true] - Whether the link should open in a new tab.
 *
 * @returns {ReactElement} A React element representing the social media icon with a link.
 */
type PropsType = {
  link: string;
  name?: string;
  icon: IconType;
  newTab?: boolean;
};

const SocialMedia = ({ link, name, icon, newTab = true }: PropsType): ReactElement => {
  const IconComponent = icon;
  const isInternal = link.startsWith("/");

  return (
    <div className="cursor-pointer focus:outline-none hover:scale-125 transition-transform">
      {isInternal && !newTab ? (
        <Link href={link} className="flex items-center justify-center space-x-2">
          <IconComponent className="w-8 h-8" />
          {name && <span className="text-sm">{name}</span>}
        </Link>
      ) : (
        <a
          href={link}
          target={newTab ? "_blank" : "_self"}
          rel={newTab ? "noopener noreferrer" : undefined}
          className="flex items-center justify-center space-x-2"
        >
          <IconComponent className="w-8 h-8" />
          {name && <span className="text-sm">{name}</span>}
        </a>
      )}
    </div>
  );
};

export default SocialMedia;