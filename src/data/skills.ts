import { IconType } from "react-icons";
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoAws,
  BiLogoCPlusPlus,
  BiLogoCss3,
  BiLogoFirebase,
  BiLogoGoogleCloud,
  BiLogoJavascript,
  BiLogoJquery,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPython,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { BsFillBootstrapFill, BsGit } from "react-icons/bs";
import {
  SiKeras,
  SiKotlin,
  SiProxmox,
  SiTensorflow,
  SiTruenas,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { FaCloudflare } from "react-icons/fa";
import { SiUbiquiti } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";

function generateUniqueId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export interface Skill {
  id: string;
  Icon: IconType;
  name: string;
}

export const languagesAndTools: Skill[] = [
  {
    id: generateUniqueId(),
    Icon: AiFillHtml5,
    name: "HTML",
  },
  {
    id: generateUniqueId(),
    Icon: BiLogoCss3,
    name: "CSS",
  },
  {
    id: generateUniqueId(),
    Icon: BiLogoJavascript,
    name: "Javascript",
  },
  {
    id: generateUniqueId(),
    Icon: SiTypescript,
    name: "Typescript",
  },
  {
    id: generateUniqueId(),
    Icon: SiVite,
    name: "Vite",
  },
  {
    id: generateUniqueId(),
    Icon: BiLogoNodejs,
    name: "NodeJS",
  },
  {
    id: generateUniqueId(),
    Icon: BiLogoPython,
    name: "Python",
  },
  {
    id: generateUniqueId(),
    Icon: BiLogoCPlusPlus,
    name: "C++",
  },
  {
    id: generateUniqueId(),
    Icon: SiKotlin,
    name: "Kotlin",
  },
];

export const librariesAndFrameworks: Skill[] = [
  {
    id: generateUniqueId(),
    Icon: BiLogoReact,
    name: "React",
  },
  {
    id: generateUniqueId(),
    Icon: TbBrandNextjs,
    name: "NextJS",
  },
  {
    id: generateUniqueId(),
    Icon: BiLogoTailwindCss,
    name: "Tailwind",
  },
  {
    id: generateUniqueId(),
    Icon: BsFillBootstrapFill,
    name: "Bootstrap",
  },
  {
    id: generateUniqueId(),
    Icon: BiLogoJquery,
    name: "Jquery",
  },
  {
    id: generateUniqueId(),
    Icon: SiTensorflow,
    name: "Tensorflow",
  },
  {
    id: generateUniqueId(),
    Icon: SiKeras,
    name: "Keras",
  },
];

export const databases: Skill[] = [
  {
    id: generateUniqueId(),
    Icon: GrMysql,
    name: "MySQL",
  },
  {
    id: generateUniqueId(),
    Icon: BiLogoMongodb,
    name: "MongoDB",
  },
  {
    id: generateUniqueId(),
    Icon: BiLogoFirebase,
    name: "Firebase",
  },
];

export const others: Skill[] = [
  {
    id: generateUniqueId(),
    Icon: BsGit,
    name: "Git",
  },
  {
    id: generateUniqueId(),
    Icon: SiProxmox,
    name: "Proxmox",
  },
  {
    id: generateUniqueId(),
    Icon: SiTruenas,
    name: "TrueNAS",
  },
  {
    id: generateUniqueId(),
    Icon: FaCloudflare,
    name: "Cloudflare",
  },
  {
    id: generateUniqueId(),
    Icon: SiUbiquiti,
    name: "Ubiquiti",
  },
  {
    id: generateUniqueId(),
    Icon: BiLogoGoogleCloud,
    name: "GCP",
  },
  {
    id: generateUniqueId(),
    Icon: BiLogoAws,
    name: "AWS",
  },
  {
    id: generateUniqueId(),
    Icon: IoLogoVercel,
    name: "Vercel",
  },
];
