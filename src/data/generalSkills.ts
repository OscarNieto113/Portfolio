import { IconType } from "react-icons";
import { AiFillCode, AiFillDatabase } from "react-icons/ai";
import { BiSolidServer } from "react-icons/bi";
import { BsHddNetworkFill, BsWindowFullscreen } from "react-icons/bs";

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
    Icon: BsWindowFullscreen,
    title: "Frontend Development",
    about:
      "Building user-friendly interfaces by utilizing <b>HTML</b>, <b>Tailwind</b>, and <b>React</b>. Transforming design concepts into functional.",
  },
  {
    id: generateUniqueId(),
    Icon: AiFillDatabase,
    title: "Backend Development",
    about:
      "Constructing robust <b>server-side</b> applications using technologies like <b>Node.js</b> and <b>Python</b>, ensuring optimal data handling and functionality.",
  },
  {
    id: generateUniqueId(),
    Icon: AiFillCode,
    title: "Competitive Coder",
    about:
      "Avid competitive coder, with a focus on platforms like LeetCode. Consistently writing <b>step-by-step</b> solutions.",
  },
  {
    id: generateUniqueId(),
    Icon: BiSolidServer,
    title: "Server Infrastructure",
    about:
      "Managing and optimizing my <b>Homelab Server</b>. Currently using <b>Proxmox</b>, <b>TrueNAS</b>, <b>Kubernetes</b>, <b>Docker</b>, and <b>Cloudflare</b>.",
  },
  {
    id: generateUniqueId(),
    Icon: BsHddNetworkFill,
    title: "Networking",
    about:
      "Gained proficiency in network protocols, configurations, and security by experimenting with my <b>Homelab Server</b>. Currently using <b>Ubiquiti</b> gear.",
  }
];
