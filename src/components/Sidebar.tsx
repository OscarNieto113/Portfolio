import Image from "next/image";
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
    <div className="text-base font-medium">
      <Image
        src={Profile_Picture}
        alt="Profile Picture"
        className="w-32 h-32 mx-auto rounded-full"
        priority={true}
      />
      <h2 className="my-4 text-3xl font-medium tracking-wider font-dina">
        <strong>
          <span className="text-orange">
            {"<"}Oscar{"/>"}
          </span>
          Nieto Espitia
        </strong>
      </h2>

      {/*Resume */}
      <DownloadButton
        href={"/resume.pdf"}
        nameDownload={"Oscar Nieto Espitia.pdf"}
        icon={AiFillFilePdf}
      />

      {/*Social Media */}
      <div className="flex justify-around w-9/12 my-5 text-Purple md:w-full">
        <SocialMedia
          link={"https://www.linkedin.com/in/oscarnieto113"}
          name={""}
          icon={AiFillLinkedin}
        />
        <SocialMedia
          link={"https://github.com/OscarNieto113"}
          name={""}
          icon={AiFillGithub}
        />
        <SocialMedia
          link={"https://leetcode.com/OscarNieto113/"}
          name={""}
          icon={SiLeetcode}
        />
      </div>

      {/*Persona Info */}
      <div
        className="py-4 my-5 text-newGray bg-lightPurple"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <PersoalInformation description="México" icon={GoLocation} />
        <PersoalInformation description="onietoespitia2@gmail.com" icon={AiOutlineMail} />
        <PersoalInformation description="+52 (462) 148 6009" icon={AiOutlinePhone} />
      </div>
      {/*Persona Info 
      <button
        onClick={() => {}}
        className="w-8/12 px-5 py-2 my-4 text-white rounded-full cursor-pointer focus:outline-none hover:scale-105 bg-purple"
      >
        Change Theme
      </button>*/}
    </div>
  );
};

export default Sidebar;
