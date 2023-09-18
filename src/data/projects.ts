import { Skill } from "../data/skills";
import { generalSkills } from "./generalSkills";
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
import { RiNotionFill } from "react-icons/ri";

function generateUniqueId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export interface Project {
  id: string;
  nameProject: string;
  imgPath: string;
  description: string;
  urlDeploy?: string;
  urlGithub: string;
  languagesAndTools: Set<Skill>;
  librariesAndFrameworks: Set<Skill>;
  databases: Set<Skill>;
  others: Set<Skill>;
  category: Category[];
}

export const projects: Project[] = [
  {
    id: generateUniqueId(),
    nameProject: "Portfolio",
    imgPath: "/images/projects/1.png",
    description:
      "Hello! Welcome to My Tech Journey Portfolio As a Computer Science student currently pursuing my studies at ITESM, I am thrilled to present this project to you. It's not just a website; it's a reflection of my lifelong fascination with technology and my journey of turning that curiosity into a career.",
    urlDeploy: "https://oscarnietoespitia.tech",
    urlGithub: "https://github.com/OscarNieto113/Portfolio",
    languagesAndTools: new Set([
      { id: "1", Icon: AiFillHtml5, name: "HTML" },
      { id: "4", Icon: SiTypescript, name: "Typescript" },
      { id: "5", Icon: SiVite, name: "Vite" },
    ]),
    librariesAndFrameworks: new Set([
      { id: "10", Icon: BiLogoReact, name: "React" },
      { id: "11", Icon: TbBrandNextjs, name: "NextJS" },
      { id: "12", Icon: BiLogoTailwindCss, name: "Tailwind" },
    ]),
    databases: new Set([]),
    others: new Set([
      { id: "20", Icon: BsGit, name: "Git" },
      { id: "27", Icon: IoLogoVercel, name: "Vercel" },
    ]),
    category: ["Frontend Development"],
  },
  {
    id: generateUniqueId(),
    nameProject: "Kiara Bienes Raices",
    imgPath: "/images/projects/KIARA.png",
    description: "Description of my project",
    urlDeploy: "https://casaenqueretaro.com.mx",
    urlGithub: "https://github.com/Genesis-Solutions/Kiara-Bienes-Raices",
    languagesAndTools: new Set([
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
    ]),
    librariesAndFrameworks: new Set([
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
        id: "14",
        Icon: BiLogoJquery,
        name: "Jquery",
      },
    ]),
    databases: new Set([
      {
        id: "17",
        Icon: GrMysql,
        name: "MySQL",
      },
    ]),
    others: new Set([
      {
        id: "20",
        Icon: BsGit,
        name: "Git",
      },
      {
        id: "26",
        Icon: BiLogoAws,
        name: "AWS",
      },
    ]),
    category: [
      "Project Management",
      "Backend Development",
      "Frontend Development",
    ],
  },
  {
    id: generateUniqueId(),
    nameProject: "Gomez Morin",
    imgPath: "/images/projects/GOMEZ.png",
    description: "Description of my project",
    urlDeploy: "https://eventos-ceceq.com/",
    urlGithub: "https://github.com/Genesis-Solutions/Gomez-Morin-Frontend",
    languagesAndTools: new Set([
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
        id: "5",
        Icon: SiVite,
        name: "Vite",
      },
    ]),
    librariesAndFrameworks: new Set([
      {
        id: "10",
        Icon: BiLogoReact,
        name: "React",
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
    ]),
    databases: new Set([
      {
        id: "18",
        Icon: BiLogoMongodb,
        name: "MongoDB",
      },
    ]),
    others: new Set([
      {
        id: "20",
        Icon: BsGit,
        name: "Git",
      },
      {
        id: "26",
        Icon: BiLogoAws,
        name: "AWS",
      },
    ]),
    category: [
      "Project Management",
      "Backend Development",
      "Frontend Development",
    ],
  },
  {
    id: generateUniqueId(),
    nameProject: "Store Sales Forecasting",
    imgPath: "/images/projects/STORESALES.png",
    description: "Description of my project",
    urlDeploy: "",
    urlGithub: "https://github.com/FlavioRr/StoreSalesForecastingTC3006C",
    languagesAndTools: new Set([
      {
        id: "1",
        Icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "3",
        Icon: BiLogoJavascript,
        name: "Javascript",
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
        id: "29",
        Icon: SiJupyter,
        name: "Jupyter Notebook",
      },
    ]),
    librariesAndFrameworks: new Set([
      {
        id: "10",
        Icon: BiLogoReact,
        name: "React",
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
        id: "28",
        Icon: SiScikitlearn,
        name: "ScikitLearn",
      },
      {
        id: "28",
        Icon: BiLogoFlask,
        name: "Flask",
      },
    ]),
    databases: new Set([]),
    others: new Set([
      {
        id: "20",
        Icon: BsGit,
        name: "Git",
      },
      {
        id: "26",
        Icon: BiLogoAws,
        name: "AWS",
      },
    ]),
    category: [
      "Backend Development",
      "Frontend Development",
      "Artificial Intelligence",
    ],
  },
  {
    id: generateUniqueId(),
    nameProject: "Genesis",
    imgPath: "/images/projects/GENESIS.png",
    description: "Description of my project",
    urlDeploy: "",
    urlGithub:
      "https://andrewisabeast.notion.site/G-nesis-e66594d87d41464dacb036ab7322e908?pvs=4",
    languagesAndTools: new Set([]),
    librariesAndFrameworks: new Set([]),
    databases: new Set([]),
    others: new Set([
      {
        id: "30",
        Icon: RiNotionFill,
        name: "Notion",
      },
    ]),
    category: ["Project Management"],
  },
  {
    id: generateUniqueId(),
    nameProject: "Atemporal",
    imgPath: "/images/projects/ATEMPORAL.png",
    description: "Description of my project",
    urlDeploy: "",
    urlGithub: "https://github.com/Mike5801/AppAtemporal",
    languagesAndTools: new Set([
      {
        id: "9",
        Icon: SiKotlin,
        name: "Kotlin",
      },
    ]),
    librariesAndFrameworks: new Set([
      {
        id: "19",
        Icon: BiLogoFirebase,
        name: "Firebase",
      },
    ]),
    databases: new Set([]),
    others: new Set([
      {
        id: "20",
        Icon: BsGit,
        name: "Git",
      },
    ]),
    category: ["Backend Development", "Frontend Development"],
  },
  {
    id: generateUniqueId(),
    nameProject: "Data Logic Code",
    imgPath: "/images/projects/DLC.png",
    description: "Description of my project",
    urlDeploy: "https://dlc-itesm.uc.r.appspot.com/users/login",
    urlGithub: "https://github.com/OscarNieto113/DLC",
    languagesAndTools: new Set([
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
      }
    ]),
    librariesAndFrameworks: new Set([
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
    ]),
    databases: new Set([
      {
        id: "17",
        Icon: GrMysql,
        name: "MySQL",
      },
    ]),
    others: new Set([
      {
        id: "20",
        Icon: BsGit,
        name: "Git",
      },
      {
        id: "25",
        Icon: BiLogoGoogleCloud,
        name: "GCP",
      },
    ]),
    category: [
      "Backend Development",
      "Frontend Development",
    ],
  },
];

const generalSkillTitles = generalSkills.map((skill) => skill.title);
export type Category = (typeof generalSkillTitles)[number];
