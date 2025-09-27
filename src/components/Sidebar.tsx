import Image from "next/image";
import { AiOutlineFolder } from "react-icons/ai";
import DownloadButton from "./DownloadButton";
import PersoalInformation from "./PersonalInformation";
import { AiFillLinkedin, AiFillGithub, AiFillFilePdf, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { GoLocation } from "react-icons/go";
import Profile_Picture from "../../public/profile_picture.webp";
import SocialMedia from "./SocialMedia";

/**
 * Represents a sidebar component displaying personal information and links to social media.
 *
 * @component
 *
 * @returns {React.ReactElement} A React element representing the sidebar.
 */
const Sidebar = () => {
  return (
    <div className="flex flex-col items-center text-base font-medium gap-3">
      {/* Profile */}
      <Image
        src={Profile_Picture}
        alt="Profile Picture"
        className="w-32 h-32 rounded-full"
        priority={true}
      />

      {/* Name */}
      <h1 className="text-3xl font-medium tracking-wider text-center font-dina">
        <strong>
          Oscar Nieto Espitia
        </strong>
      </h1>
      <p>Data Analyst & IT Systems Specialist</p>

      {/* Resume Button */}
      <DownloadButton
        href={"/resume.pdf"}
        nameDownload={"Oscar Nieto Espitia.pdf"}
        icon={AiFillFilePdf}
      />

      {/* Social Media */}
      <div className="flex justify-center gap-6 text-Purple">
        <SocialMedia name="" link="https://linkedin.com/in/oscarnietoespitia" icon={AiFillLinkedin} />
        <SocialMedia name="" link="https://github.com/OscarNieto113" icon={AiFillGithub} />
        <SocialMedia name="" link="https://leetcode.com/OscarNieto113/" icon={SiLeetcode} />
      </div>

      {/* Personal Info */}
      <div className="flex flex-col gap-3 w-full p-4 bg-lightPurple rounded-lg text-newGray">
        <PersoalInformation description="México" icon={GoLocation} />
        <PersoalInformation description="onietoespitia2@gmail.com" icon={AiOutlineMail} />
        <PersoalInformation description="+52 (462) 148 6009" icon={AiOutlinePhone} />
      </div>
    </div>
  );
};


export default Sidebar;
