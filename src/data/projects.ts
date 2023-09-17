import { Skill } from "../data/skills";
import { generalSkills } from "./generalSkills";
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
    category: ["Project Management"],
  },
];

const generalSkillTitles = generalSkills.map((skill) => skill.title);
export type Category = (typeof generalSkillTitles)[number];
