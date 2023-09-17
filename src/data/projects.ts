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
  languagesAndTools: Skill[];
  librariesAndFrameworks: Skill[];
  databases: Skill[];
  others: Skill[];
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
    languagesAndTools: [
      { id: "1", Icon: AiFillHtml5, name: "HTML" },
      { id: "4", Icon: SiTypescript, name: "Typescript" },
      { id: "5", Icon: SiVite, name: "Vite" },
    ],
    librariesAndFrameworks: [
      { id: "10", Icon: BiLogoReact, name: "React" },
      { id: "11", Icon: TbBrandNextjs, name: "NextJS" },
      { id: "12", Icon: BiLogoTailwindCss, name: "Tailwind" },
    ],
    databases: [],
    others: [
      { id: "20", Icon: BsGit, name: "Git" },
      { id: "27", Icon: IoLogoVercel, name: "Vercel" },
    ],
    category: ["Frontend Development"],
  },
  {
    id: generateUniqueId(),
    nameProject: "Kiara Bienes Raices",
    imgPath: "/images/projects/1.png",
    description: "Description of my project",
    urlDeploy: "https://example.com",
    urlGithub: "https://github.com/OscarNieto113/Kiara-Bienes-Raices",
    languagesAndTools: [
      { id: "1", Icon: AiFillHtml5, name: "HTML" },
      { id: "3", Icon: BiLogoJavascript, name: "Javascript" },
    ],
    librariesAndFrameworks: [{ id: "3", Icon: TbBrandNextjs, name: "React" }],
    databases: [{ id: "4", Icon: TbBrandNextjs, name: "MongoDB" }],
    others: [
      { id: "5", Icon: TbBrandNextjs, name: "Redux" },
      { id: "6", Icon: TbBrandNextjs, name: "Node.js" },
    ],
    category: ["Project Management"],
  },
  {
    id: generateUniqueId(),
    nameProject: "My Project",
    imgPath: "/images/projects/1.png",
    description: "Description of my project",
    urlDeploy: "https://example.com",
    urlGithub: "https://github.com/myproject",
    languagesAndTools: [
      { id: "1", Icon: TbBrandNextjs, name: "HTML" },
      { id: "2", Icon: TbBrandNextjs, name: "CSS" },
    ],
    librariesAndFrameworks: [{ id: "3", Icon: TbBrandNextjs, name: "React" }],
    databases: [{ id: "4", Icon: TbBrandNextjs, name: "MongoDB" }],
    others: [
      { id: "5", Icon: TbBrandNextjs, name: "Redux" },
      { id: "6", Icon: TbBrandNextjs, name: "Node.js" },
    ],
    category: ["Project Management"],
  },
  {
    id: generateUniqueId(),
    nameProject: "My Project",
    imgPath: "/images/projects/1.png",
    description: "Description of my project",
    urlDeploy: "https://example.com",
    urlGithub: "https://github.com/myproject",
    languagesAndTools: [
      { id: "1", Icon: TbBrandNextjs, name: "HTML" },
      { id: "2", Icon: TbBrandNextjs, name: "CSS" },
    ],
    librariesAndFrameworks: [{ id: "3", Icon: TbBrandNextjs, name: "React" }],
    databases: [{ id: "4", Icon: TbBrandNextjs, name: "MongoDB" }],
    others: [
      { id: "5", Icon: TbBrandNextjs, name: "Redux" },
      { id: "6", Icon: TbBrandNextjs, name: "Node.js" },
    ],
    category: ["Project Management"],
  },
  {
    id: generateUniqueId(),
    nameProject: "My Project",
    imgPath: "/images/projects/1.png",
    description: "Description of my project",
    urlDeploy: "https://example.com",
    urlGithub: "https://github.com/myproject",
    languagesAndTools: [
      { id: "1", Icon: TbBrandNextjs, name: "HTML" },
      { id: "2", Icon: TbBrandNextjs, name: "CSS" },
    ],
    librariesAndFrameworks: [{ id: "3", Icon: TbBrandNextjs, name: "React" }],
    databases: [{ id: "4", Icon: TbBrandNextjs, name: "MongoDB" }],
    others: [
      { id: "5", Icon: TbBrandNextjs, name: "Redux" },
      { id: "6", Icon: TbBrandNextjs, name: "Node.js" },
    ],
    category: ["Project Management", "Frontend Development"],
  },
];

const generalSkillTitles = generalSkills.map((skill) => skill.title);
export type Category = (typeof generalSkillTitles)[number];
