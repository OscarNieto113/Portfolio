import Image from "next/image";
import { AiFillLinkedin, AiFillGithub, AiFillFilePdf } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { GoLocation } from "react-icons/go";
import Profile_Picture from "../../public/profile_picture.webp";
import SocialMedia from "./SocialMedia";

const Sidebar = () => {
  return (
    <div>
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
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
        href="/resume.pdf"
        download="Oscar Nieto Espitia.pdf"
      >
        <AiFillFilePdf className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/*Social Media */}
      <div className="flex justify-around w-9/12 my-5 text-black md:w-full">
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
        className="py-4 my-5 bg-gray-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>México</span>
        </div>
        <p className="my-2 "> onietoespitia2@gmail.com </p>
        <p className="my-2"> +52 (462) 148 6009 </p>
      </div>
      <button
        onClick={() => {}}
        className="w-8/12 px-5 py-2 my-4 text-white rounded-full cursor-pointer focus:outline-none hover:scale-105 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r"
      >
        {/* //TODO remove bg black */}
        Change Theme
      </button>
    </div>
  );
};

export default Sidebar;
