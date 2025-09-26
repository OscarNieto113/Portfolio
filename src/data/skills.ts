import { IconType } from "react-icons";
import { RiNotionFill }from "react-icons/ri";
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

export const DataAnalyst: Skill[] = [
  {
    id: "1",
    Icon: BiLogoPython,
    name: "Python",
  },
  {
    id: "2",
    Icon: SiJupyter,
    name: "Jupyter Notebook",
  },
  {
    id: "3",
    Icon: GrMysql,
    name: "MySQL",
  },
  {
    id: "4",
    Icon: SiTypescript,
    name: "Power BI",
  },
  {
    id: "5",
    Icon: SiVite,
    name: "Firebase",
  },
  {
    id: "6",
    Icon: GrMysql ,
    name: "MongoDB",
  },
];

export const Infraestructure: Skill[] = [
  {
    id: "1",
    Icon: SiProxmox,
    name: "Proxmox",
  },
  {
    id: "2",
    Icon: SiTruenas,
    name: "TrueNAS",
  },
  {
    id: "3",
    Icon: BiLogoAws,
    name: "AWS",
  },
  {
    id: "4",
    Icon: BiLogoGoogleCloud,
    name: "Google Cloud (GCP)",
  },
  {
    id: "5",
    Icon: IoLogoVercel,
    name: "Vercel",
  },
];

export const Network: Skill[] = [
  {
    id: "1",
    Icon: SiUbiquiti,
    name: "Ubiquiti",
  },
  {
    id: "2",
    Icon: FaCloudflare,
    name: "Cloudflare",
  }
];

export const Backend: Skill[] = [
  {
    id: "1",
    Icon: BiLogoNodejs,
    name: "NodeJS",
  },
  {
    id: "2",
    Icon: BiLogoFlask,
    name: "Flask",
  },
  {
    id: "3",
    Icon: BiLogoCPlusPlus,
    name: "C++",
  },
  {
    id: "4",
    Icon: SiKotlin,
    name: "Kotlin",
  }
];

export const ArtificialIntelligence: Skill[] = [
  {
    id: "1",
    Icon: SiTensorflow,
    name: "Tensorflow",
  },
  {
    id: "2",
    Icon: SiKeras,
    name: "Keras",
  },
  {
    id: "3",
    Icon: SiScikitlearn,
    name: "Scikit-learn",
  }
];

export const Frontend: Skill[] = [
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
    Icon: BiLogoReact,
    name: "React",
  },
  {
    id: "6",
    Icon: TbBrandNextjs,
    name: "NextJS",
  },
  {
    id: "7",
    Icon: BiLogoTailwindCss,
    name: "TailwindCSS",
  },
  {
    id: "8",
    Icon: BsFillBootstrapFill,
    name: "Bootstrap",
  },
  {
    id: "9",
    Icon: BiLogoJquery,
    name: "jQuery",
  },
  {
    id: "10",
    Icon: SiVite,
    name: "Vite",
  },
];
