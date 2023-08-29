import { IconType } from "react-icons";
import { BsCircleFill } from "react-icons/bs";

function generateUniqueId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

export interface Skill {
  id: string;
  Icon: IconType;
  name: string;
  level: string;
}

export const languages: Skill[] = [
  {
    id: generateUniqueId(),
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },
];
