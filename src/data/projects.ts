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
  companyIcon?: string;
  urlGithub: string;
  allSkills: Set<Skill>;
  category: Category[];
}

export const projects: Project[] = [
  {
    id: generateUniqueId(),
    nameProject: "Portfolio",
    imgPath: "/images/projects/1.png",
    companyIcon: "/icons/itesm.ico",
    description:
      "Hello! Welcome to My Tech Journey Portfolio As a Computer Science student currently pursuing my studies at ITESM, I am thrilled to present this project to you. It's not just a website; it's a reflection of my lifelong fascination with technology and my journey of turning that curiosity into a career.",
    urlDeploy: "https://oscarnietoespitia.tech",
    urlGithub: "https://github.com/OscarNieto113/Portfolio",
    allSkills: new Set([
      { id: "1", Icon: AiFillHtml5, name: "HTML" },
      { id: "4", Icon: SiTypescript, name: "Typescript" },
      { id: "5", Icon: SiVite, name: "Vite" },
      { id: "10", Icon: BiLogoReact, name: "React" },
      { id: "11", Icon: TbBrandNextjs, name: "NextJS" },
      { id: "12", Icon: BiLogoTailwindCss, name: "Tailwind" },
      { id: "20", Icon: BsGit, name: "Git" },
      { id: "27", Icon: IoLogoVercel, name: "Vercel" },
    ]),
    category: ["Frontend Development"],
  },
  {
    id: generateUniqueId(),
    nameProject: "Kiara Bienes Raices",
    imgPath: "/images/projects/KIARA.png",
    companyIcon: "/icons/itesm.ico",
    description:
      "Kiara Bienes Raices is an ambitious endeavor to empower a real estate consultancy in Querétaro. This project envisions a responsive web application that streamlines property searches, offering clients an efficient way to explore available properties for sale or rent. It simplifies transaction tracking, enhancing transparency and confidence, while also connecting seamlessly with Kiara Bienes Raices' social media presence. The ultimate objectives are to provide users with 99% property information availability and real-time process visibility, reinforcing trust and saving valuable time for clients in the real estate market.",
    urlDeploy: "https://casaenqueretaro.com.mx",
    urlGithub: "https://github.com/Genesis-Solutions/Kiara-Bienes-Raices",
    allSkills: new Set([
      { id: "1", Icon: AiFillHtml5, name: "HTML" },
      { id: "2", Icon: BiLogoCss3, name: "CSS" },
      { id: "3", Icon: BiLogoJavascript, name: "Javascript" },
      { id: "6", Icon: BiLogoNodejs, name: "NodeJS" },
      { id: "12", Icon: BiLogoTailwindCss, name: "Tailwind" },
      { id: "14", Icon: BiLogoJquery, name: "Jquery" },
      { id: "17", Icon: GrMysql, name: "MySQL" },
      { id: "20", Icon: BsGit, name: "Git" },
      { id: "26", Icon: BiLogoAws, name: "AWS" },
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
    companyIcon: "/icons/itesm.ico",
    description:
      "Gomez Morin is a transformative project focused on digitizing and optimizing the space request process at the Centro Educativo y Cultural Gomez Morin. By streamlining this procedure, the project aims to significantly reduce processing time, cut down on paperwork, and minimize physical customer interactions. Its ultimate goal is to condense a 4-hour process into just 1 hour within 15 weeks, enhancing efficiency, increasing successful requests, and improving customer satisfaction. This innovative system introduces modules for request submission, user profile management, access to vital information, communication with clients, role management, and responsiveness across devices while seamlessly coexisting with existing systems.",
    urlDeploy: "https://eventos-ceceq.com/",
    urlGithub: "https://github.com/Genesis-Solutions/Gomez-Morin-Frontend",
    allSkills: new Set([
      { id: "1", Icon: AiFillHtml5, name: "HTML" },
      { id: "2", Icon: BiLogoCss3, name: "CSS" },
      { id: "3", Icon: BiLogoJavascript, name: "Javascript" },
      { id: "5", Icon: SiVite, name: "Vite" },
      { id: "10", Icon: BiLogoReact, name: "React" },
      { id: "6", Icon: BiLogoNodejs, name: "NodeJS" },
      { id: "12", Icon: BiLogoTailwindCss, name: "Tailwind" },
      { id: "18", Icon: BiLogoMongodb, name: "MongoDB" },
      { id: "20", Icon: BsGit, name: "Git" },
      { id: "26", Icon: BiLogoAws, name: "AWS" },
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
    companyIcon: "/icons/itesm.ico",
    description:
      "In this Kaggle competition, we harnessed machine learning to create a precise time-series forecasting model for store sales using data from a major Ecuadorian grocery retailer, Corporación Favorita. Our goal was to optimize inventory management by predicting unit sales, balancing the delicate act between overstocking and product shortages. With a top 100 submission, we developed a linear regression model, employed metrics like RMSLE, MSE, and MAE for evaluation, and even crafted a user-friendly app with Flask, React, and Tailwind CSS to make future sales predictions accessible. This project showcases our proficiency in data analysis, machine learning, and application development, all geared toward solving real-world challenges in retail forecasting.",
    urlDeploy: "",
    urlGithub: "https://github.com/FlavioRr/StoreSalesForecastingTC3006C",
    allSkills: new Set([
      { id: "1", Icon: AiFillHtml5, name: "HTML" },
      { id: "3", Icon: BiLogoJavascript, name: "Javascript" },
      { id: "5", Icon: SiVite, name: "Vite" },
      { id: "7", Icon: BiLogoPython, name: "Python" },
      { id: "29", Icon: SiJupyter, name: "Jupyter Notebook" },
      { id: "10", Icon: BiLogoReact, name: "React" },
      { id: "6", Icon: BiLogoNodejs, name: "NodeJS" },
      { id: "12", Icon: BiLogoTailwindCss, name: "Tailwind" },
      { id: "28", Icon: SiScikitlearn, name: "ScikitLearn" },
      { id: "28", Icon: BiLogoFlask, name: "Flask" },
      { id: "20", Icon: BsGit, name: "Git" },
      { id: "26", Icon: BiLogoAws, name: "AWS" },
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
    companyIcon: "/icons/itesm.ico",
    description:
      "Genesis is a dynamic software department committed to achieving high competency levels, delivering quality software solutions, and advancing maturity in CMMI. Our overarching objective is to consolidate the Genesis department within a focused 15-week timeline, encompassing three key goals: reaching CMMI maturity level 2.7, fostering a Jedi-level of expertise among all team members, and consistently delivering top-notch software solutions to our esteemed Training Partners, Kiara and Gómez Morín. With a robust structure, rotating Program Managers, and agile teams managing projects like Caelum and Terra, Genesis is dedicated to continuous improvement, skill development, and innovation in software development and project management.",
    urlDeploy: "",
    urlGithub:
      "https://andrewisabeast.notion.site/G-nesis-e66594d87d41464dacb036ab7322e908?pvs=4",
    allSkills: new Set([{ id: "30", Icon: RiNotionFill, name: "Notion" }]),
    category: ["Project Management"],
  },
  {
    id: generateUniqueId(),
    nameProject: "Atemporal",
    imgPath: "/images/projects/ATEMPORAL.png",
    companyIcon: "/icons/itesm.ico",
    description:
      "Atemporal addresses the challenges faced by emerging artists who lack opportunities and financial backing. We're developing a mobile app for event promotion, management, and optimization, empowering artists to grow professionally. The app's scope includes ticket scanning, data analysis, resource management simulation, user roles, customer support, event sharing, user feedback, and cross-platform login. Atemporal's goal is to support artists in their journey, providing them with the tools needed to succeed in the industry.",
    urlDeploy: "",
    urlGithub: "https://github.com/Mike5801/AppAtemporal",
    allSkills: new Set([
      { id: "9", Icon: SiKotlin, name: "Kotlin" },
      { id: "19", Icon: BiLogoFirebase, name: "Firebase" },
      { id: "20", Icon: BsGit, name: "Git" },
    ]),
    category: ["Backend Development", "Frontend Development"],
  },
  {
    id: generateUniqueId(),
    nameProject: "Data Logic Code",
    imgPath: "/images/projects/DLC.png",
    companyIcon: "/icons/itesm.ico",
    description:
      "We specialize in developing web solutions to streamline our client's administrative processes, making them more efficient and organized. Natgas, a Mexican Natural Gas Vehicle (NGV) company, faces challenges in managing internal projects and communication. Our project, Data Logic Code, aims to replace HR's communication tool, improve HR communication with other departments, automate vacation management, centralize NG Blocks permissions, enhance monthly report data entry, simplify anniversary and birthday reminders, and provide clear visualization of Natgas objectives. This integrated digital solution aims to improve communication, data management, and overall employee engagement at Natgas.",
    urlDeploy: "https://dlc-itesm.uc.r.appspot.com/users/login",
    urlGithub: "https://github.com/OscarNieto113/DLC",
    allSkills: new Set([
      { id: "1", Icon: AiFillHtml5, name: "HTML" },
      { id: "2", Icon: BiLogoCss3, name: "CSS" },
      { id: "3", Icon: BiLogoJavascript, name: "Javascript" },
      { id: "13", Icon: BsFillBootstrapFill, name: "Bootstrap" },
      { id: "14", Icon: BiLogoJquery, name: "Jquery" },
      { id: "17", Icon: GrMysql, name: "MySQL" },
      { id: "20", Icon: BsGit, name: "Git" },
      { id: "25", Icon: BiLogoGoogleCloud, name: "GCP" },
    ]),
    category: ["Backend Development", "Frontend Development"],
  },
];

const generalSkillTitles = generalSkills.map((skill) => skill.title);
export type Category = (typeof generalSkillTitles)[number];
