import { ReactElement } from "react";
import { IconType } from "react-icons";

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
      className="flex items-center justify-center px-2 py-1 my-3 rounded-full cursor-pointer bg-newGray focus:outline-none hover:scale-105"
      href={href}
      download={nameDownload}
    >
      <IconComponent className="w-6 h-6" />
      <span>Download Resume</span>
    </a>
  );
};

export default DownloadButton;
