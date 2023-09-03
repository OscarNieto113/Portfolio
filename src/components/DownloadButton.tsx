import { ReactElement } from "react";
import { IconType } from "react-icons";

/**
 * Represents a download button component.
 *
 * @component
 *
 * @param {object} props - The component's props.
 * @param {string} props.href - The URL of the file to download.
 * @param {string} props.nameDownload - The name to use when downloading the file.
 * @param {IconType} props.icon - The icon component for the button.
 *
 * @returns {React.ReactElement} A React element representing the download button.
 */
type PropsType = {
  href: string;
  nameDownload: string;
  icon: IconType;
};

const DownloadButton = ({
  href,
  nameDownload,
  icon,
}: PropsType): ReactElement => {
    const IconComponent = icon;

  return (
    <a
      className="flex items-center justify-center px-2 py-1 my-3 rounded-full cursor-pointer bg-lightPurple text-newGray focus:outline-none hover:scale-105"
      href={href}
      download={nameDownload}
    >
      <IconComponent className="w-6 h-6" />
      <span>Download Resume</span>
    </a>
  );
};

export default DownloadButton;
