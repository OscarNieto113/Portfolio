import { IconType } from "react-icons";
import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";

function generateUniqueId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export interface GeneralSkill {
  id: string;
  Icon: IconType;
  title: string;
  about: string;
}

export const generalSkills: GeneralSkill[] = [
  {
    id: generateUniqueId(),
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  }];
