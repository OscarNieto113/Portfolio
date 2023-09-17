import { IconType } from "react-icons";
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoAws,
  BiLogoCPlusPlus,
  BiLogoCss3,
  BiLogoFirebase,
  BiLogoFlask,
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
  SiJupyter,
  SiKeras,
  SiKotlin,
  SiProxmox,
  SiScikitlearn,
  SiTensorflow,
  SiTruenas,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { FaCloudflare, FaFlask } from "react-icons/fa";
import { SiUbiquiti } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";

export interface Skill {
  id: string;
  Icon: IconType;
  name: string;
}

export const languagesAndTools: Skill[] = [
  {
    id: "1",
    Icon: AiFillHtml5,
    name: "HTML",
  },
  {
    id: "2",
    Icon: BiLogoCss3,
    name: "CSS",
  },
  {
    id: "3",
    Icon: BiLogoJavascript,
    name: "Javascript",
  },
  {
    id: "4",
    Icon: SiTypescript,
    name: "Typescript",
  },
  {
    id: "5",
    Icon: SiVite,
    name: "Vite",
  },
  
  {
    id: "7",
    Icon: BiLogoPython,
    name: "Python",
  },
  {
    id: "8",
    Icon: BiLogoCPlusPlus,
    name: "C++",
  },
  {
    id: "9",
    Icon: SiKotlin,
    name: "Kotlin",
  },
  {
    id: "29",
    Icon: SiJupyter,
    name: "Jupyter Notebook",
  },
];

export const librariesAndFrameworks: Skill[] = [
  {
    id: "10",
    Icon: BiLogoReact,
    name: "React",
  },
  {
    id: "11",
    Icon: TbBrandNextjs,
    name: "NextJS",
  },
  {
    id: "6",
    Icon: BiLogoNodejs,
    name: "NodeJS",
  },
  {
    id: "12",
    Icon: BiLogoTailwindCss,
    name: "Tailwind",
  },
  {
    id: "13",
    Icon: BsFillBootstrapFill,
    name: "Bootstrap",
  },
  {
    id: "14",
    Icon: BiLogoJquery,
    name: "Jquery",
  },
  {
    id: "15",
    Icon: SiTensorflow,
    name: "Tensorflow",
  },
  {
    id: "16",
    Icon: SiKeras,
    name: "Keras",
  },
  {
    id: "28",
    Icon: SiScikitlearn,
    name: "Keras",
  },
  {
    id: "28",
    Icon: BiLogoFlask,
    name: "Flask",
  },
];

export const databases: Skill[] = [
  {
    id: "17",
    Icon: GrMysql,
    name: "MySQL",
  },
  {
    id: "18",
    Icon: BiLogoMongodb,
    name: "MongoDB",
  },
  {
    id: "19",
    Icon: BiLogoFirebase,
    name: "Firebase",
  },
];

export const others: Skill[] = [
  {
    id: "20",
    Icon: BsGit,
    name: "Git",
  },
  {
    id: "21",
    Icon: SiProxmox,
    name: "Proxmox",
  },
  {
    id: "22",
    Icon: SiTruenas,
    name: "TrueNAS",
  },
  {
    id: "23",
    Icon: FaCloudflare,
    name: "Cloudflare",
  },
  {
    id: "24",
    Icon: SiUbiquiti,
    name: "Ubiquiti",
  },
  {
    id: "25",
    Icon: BiLogoGoogleCloud,
    name: "GCP",
  },
  {
    id: "26",
    Icon: BiLogoAws,
    name: "AWS",
  },
  {
    id: "27",
    Icon: IoLogoVercel,
    name: "Vercel",
  },
];
