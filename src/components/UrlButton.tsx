import React, { HTMLProps } from "react";
import { IconType } from "react-icons";

interface UrlButtonProps extends HTMLProps<HTMLAnchorElement> {
  href: string;
  ariaLabel: string;
  label: string,
  icon: IconType;
}

const UrlButton: React.FC<UrlButtonProps> = ({ href, label, ariaLabel, icon }) => {
  const IconComponent = icon;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center px-4 py-2 space-x-3 text-lg rounded-md cursor-pointer bg-lightPurple text-newGray dark:bg-newGray focus:outline-none hover:scale-110`}
      aria-label={ariaLabel}
    >
      <IconComponent className="w-6 h-6" /> <span>{label}</span>
    </a>
  );
};

export default UrlButton;
