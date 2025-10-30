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
  SiApachehadoop,
  SiDocker,
  SiHomeassistant,
  SiHuawei,
  SiJupyter,
  SiKeras,
  SiKotlin,
  SiLinux,
  SiMicrosoftsqlserver,
  SiNumpy,
  SiPandas,
  SiPihole,
  SiPortainer,
  SiPowerbi,
  SiProxmox,
  SiPython,
  SiSap,
  SiScikitlearn,
  SiSnowflake,
  SiSqlite,
  SiTableau,
  SiTensorflow,
  SiTruenas,
  SiTypescript,
  SiVite,
  SiVmware,
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
  rolAndContribution: string;
  urlDeploy?: string;
  developedAtIcon?: string;
  developedAt?: string;
  urlGithub?: string;
  allSkills: Set<Skill>;
  category: Category[];
}

export const projects: Project[] = [
  {
    id: generateUniqueId(),
    nameProject: "Home Server & Virtualized Infrastructure Lab",
    imgPath: "/images/projects/homelab.webp",
    developedAtIcon: "/icons/favicon.ico",
    developedAt: "Personal Project",
    description:
      "Designed and deployed a fully virtualized home infrastructure environment leveraging Proxmox, TrueNAS, and Ubiquiti equipment. The system integrates network segmentation, application hosting, and intelligent traffic management for data analytics, media, and IoT workloads.",
    rolAndContribution:
      "I architected a complete server and network ecosystem to simulate enterprise-grade operations at home. Using Proxmox, I virtualized multiple applications through Portainer, including storage (TrueNAS), media servers, and analytics tools. I implemented VLANs and firewall rules to isolate IoT, Home, and Guest networks, enhancing security and performance. Additionally, I deployed Pi-hole for DNS filtering, automated NVR monitoring, and optimized bandwidth with Ubiquiti devices. This environment serves as a continuous learning lab for system administration, DevOps, and network optimization.",
    urlDeploy: "",
    urlGithub: "",
    allSkills: new Set([
      { id: "80", Icon: SiProxmox, name: "Proxmox" },
      { id: "81", Icon: SiTruenas, name: "TrueNAS" },
      { id: "82", Icon: SiUbiquiti, name: "Ubiquiti" },
      { id: "83", Icon: SiDocker, name: "Docker" },
      { id: "84", Icon: SiPortainer, name: "Portainer" },
      { id: "85", Icon: SiLinux, name: "Linux" },
      { id: "86", Icon: SiPihole, name: "Pi-hole" },
      { id: "88", Icon: SiHomeassistant, name: "Home Automation" },
    ]),
    category: [
      "Network Engineering",
      "Infrastructure Engineering",
    ],
  },

  {
    id: generateUniqueId(),
    nameProject: "Manufacturing Analytics Dashboard",
    imgPath: "/images/projects/alteacasting.jpg",
    developedAtIcon: "/icons/alteacasting.ico",
    developedAt: "Altea Casting",
    description:
      "Designed and implemented a Power BI analytics solution to centralize production, quality, and material consumption data. The project provided real-time visibility of KPIs across production stages, enhancing operational control and decision-making.",
    rolAndContribution:
      "As a Data Analyst Consultant, I consolidated fragmented Excel records into a scalable Power BI data model integrating production output, rejected parts, and raw material usage. I built interactive dashboards that improved traceability and revealed actionable insights on efficiency and quality. Additionally, I conducted workshops with production teams to align KPIs with business goals and trained end users for seamless adoption. This project demonstrated my ability to translate manufacturing operations into clear, data-driven insights that supported continuous improvement.",
    urlDeploy: "",
    urlGithub: "",
    allSkills: new Set([
      { id: "70", Icon: SiPowerbi, name: "Power BI" },
      { id: "71", Icon: SiMicrosoftsqlserver, name: "SQL Server" },
      { id: "72", Icon: SiPandas, name: "Pandas" },
    ]),
    category: ["Data Analyst"],
  },

  {
    id: generateUniqueId(),
    nameProject: "Server Health & License Optimization Dashboard",
    imgPath: "/images/projects/igeckoo2.png",
    developedAtIcon: "/icons/igeckoo.ico",
    developedAt: "iGeckoo (Client: Kellanova)",
    description:
      "Developed an interactive dashboard to monitor performance and license utilization across over 50 servers, integrating platforms such as SAP BODS, SQL Server, Hadoop, Tableau, and Snowflake. The tool automated health tracking and reduced manual reporting efforts.",
    rolAndContribution:
      "As Data Analyst, I designed and implemented a Power Bi dashboard that visualized CPU, RAM, and SWAP usage through real-time indicators, enabling engineers to identify system issues instantly. I integrated license utilization metrics to detect inactive dashboards and optimize cost efficiency. Additionally, I automated monthly data updates and reports, streamlining operational processes and allowing the engineering team to focus on high-impact performance analysis. This project demonstrated my ability to transform raw infrastructure data into actionable, business-oriented insights.",
    urlDeploy: "",
    urlGithub: "",
    allSkills: new Set([
      { id: "60", Icon: SiTableau, name: "Tableau" },
      { id: "61", Icon: SiPython, name: "Python" },
      { id: "62", Icon: SiSnowflake, name: "Snowflake" },
      { id: "63", Icon: SiApachehadoop, name: "Hadoop" },
      { id: "64", Icon: SiSap, name: "SAP BODS" },
      { id: "65", Icon: SiPandas, name: "Pandas" },
      { id: "66", Icon: SiNumpy, name: "NumPy" },
    ]),
    category: ["Data Analyst", "Project Management"],
  },
  {
    id: generateUniqueId(),
    nameProject: "Multi-Platform Server Performance Optimization",
    imgPath: "/images/projects/igeckoo1.png",
    developedAtIcon: "/icons/igeckoo.ico",
    developedAt: "iGeckoo (Client: Kellanova)",
    description:
      "Analyzed and optimized performance across more than 50 enterprise servers for Kellanova, identifying inefficiencies across SAP BODS, SQL Server, Hadoop, Tableau, Alation, Snowflake, and memSQL platforms. Achieved substantial cost reductions through data-driven infrastructure optimization.",
    rolAndContribution:
      "As Data Analyst, I led cross-platform performance monitoring, collecting and analyzing CPU, RAM, and SWAP usage data to detect inefficiencies and overprovisioned systems. I automated monthly reporting pipelines and presented insights directly to platform engineers, enabling informed infrastructure decisions. My recommendations resulted in $500K annual savings by optimizing resource allocation and consolidating underutilized systems. Additionally, I translated complex technical metrics into actionable insights for non-technical stakeholders, ensuring alignment between technical improvements and business goals.",
    urlDeploy: "",
    urlGithub: "",
    allSkills: new Set([
      { id: "50", Icon: SiPython, name: "Python" },
      { id: "51", Icon: SiSqlite, name: "SQL" },
      { id: "52", Icon: SiSnowflake, name: "Snowflake" },
      { id: "53", Icon: SiTableau, name: "Tableau" },
      { id: "54", Icon: SiApachehadoop, name: "Hadoop" },
      { id: "55", Icon: SiSap, name: "SAP BODS" },
      { id: "56", Icon: SiPandas, name: "Pandas" },
      { id: "57", Icon: SiNumpy, name: "NumPy" },
    ]),
    category: ["Data Analyst", "Project Management"],
  },

  {
    id: generateUniqueId(),
    nameProject: "Advanced Data Analytics for Aircraft Stability Prediction",
    imgPath: "/images/projects/GE.png",
    developedAtIcon: "/icons/itesm.ico",
    developedAt: "ITESM",
    description:
      "Developed an advanced data science project to predict aircraft stability during flight. Achieved high accuracy in identifying the 'Stable Cruise' phase through machine learning, enhancing safety insights and operational efficiency.",
    rolAndContribution:
      "As Data Analyst, I led the design and optimization of machine learning models (XGBoost and Neural Networks), achieving 97% accuracy in stability prediction. I tackled data imbalance challenges using undersampling, boosting model efficiency. I also documented the workflow following CRISP-DM methodology, ensuring structured, reproducible processes. Findings were presented to stakeholders in a clear, actionable way, demonstrating my ability to transform complex analytics into business value.",
    urlDeploy: "",
    urlGithub:
      "https://github.com/CristianA01702752/GE-Data-Proyect-Electric-Cherry",
    allSkills: new Set([
      { id: "40", Icon: SiPython, name: "Python" },
      { id: "41", Icon: SiScikitlearn, name: "Scikit-learn" },
      { id: "42", Icon: SiTensorflow, name: "TensorFlow" },
      { id: "44", Icon: SiPandas, name: "Pandas" },
      { id: "45", Icon: SiNumpy, name: "NumPy" },
    ]),
    category: ["Artificial Intelligence", "Data Analyst"],
  },
  {
    id: generateUniqueId(),
    nameProject: "NextCloud Implementation at AIFA",
    imgPath: "/images/projects/NEXTCLOUD.png",
    developedAtIcon: "/icons/aifa.ico",
    developedAt: "AIFA",
    description:
      "Implemented and configured NextCloud at Felipe Ángeles International Airport to enhance secure collaboration and document management. The project addressed strict privacy requirements and introduced structured software practices.",
    rolAndContribution:
      "As IT System Analyst, I led the deployment and customization of NextCloud to create a private, secure cloud environment for sensitive data. I ensured real-time collaboration on office documents while safeguarding compliance with data privacy policies. Additionally, I drove the adoption of CMMI practices in the Configuration Management area, transmitting best practices to the team and fostering a systematic approach to software product management. This project highlighted my ability to blend technical expertise with process improvement in a mission-critical environment.",
    urlDeploy: "",
    urlGithub: "",
    allSkills: new Set([{ id: "34", Icon: SiLinux, name: "Linux" }]),
    category: ["Infrastructure Engineering"],
  },
  {
    id: generateUniqueId(),
    nameProject: "AIFA Data Center Operations",
    imgPath: "/images/projects/DATACENTER.jpg",
    developedAtIcon: "/icons/aifa.ico",
    developedAt: "AIFA",
    description:
      "Operational support for the Felipe Ángeles International Airport Data Center, ensuring stability and reliability of critical IT infrastructure in collaboration with Huawei.",
    rolAndContribution:
      "I was responsible for routine data center inspections, monitoring and ensuring proper functioning of critical systems. I provisioned virtual machines with additional resources based on usage patterns, optimized performance, and coordinated with Huawei engineers to resolve advanced infrastructure issues.",
    urlDeploy: "",
    urlGithub: "",
    allSkills: new Set([
      { id: "21", Icon: SiVmware, name: "VMware" },
      { id: "26", Icon: BiLogoAws, name: "AWS" },
      { id: "20", Icon: BsGit, name: "Git" },
      { id: "31", Icon: SiHuawei, name: "Huawei Systems" },
    ]),
    category: ["Infrastructure Engineering"],
  },
  {
    id: generateUniqueId(),
    nameProject: "AIFA Website",
    imgPath: "/images/projects/AIFA.png",
    developedAtIcon: "/icons/aifa.ico",
    developedAt: "AIFA",
    description:
      "The official website of the Felipe Ángeles International Airport (AIFA), designed to provide travelers with updated information and an accessible interface. Built with HTML, CSS, and JavaScript, the site reflects the airport's branding and ensures a smooth user experience.",
    rolAndContribution:
      "I collaborated with a teammate to develop and maintain the official AIFA website. My responsibilities included implementing branding updates requested by the design team, coding front-end features, and managing deployments in AWS to ensure reliability and availability.",
    urlDeploy: "https://aifa.aero/",
    urlGithub: "",
    allSkills: new Set([
      { id: "1", Icon: AiFillHtml5, name: "HTML" },
      { id: "2", Icon: BiLogoCss3, name: "CSS" },
      { id: "3", Icon: BiLogoJavascript, name: "Javascript" },
      { id: "26", Icon: BiLogoAws, name: "AWS" },
      { id: "20", Icon: BsGit, name: "Git" },
    ]),
    category: ["Frontend Development"],
  },
  {
    id: generateUniqueId(),
    nameProject: "Portfolio",
    imgPath: "/images/projects/1.png",
    developedAtIcon: "/icons/itesm.ico",
    developedAt: "ITESM",
    description:
      "Hello! Welcome to My Tech Journey Portfolio As a Computer Science student currently pursuing my studies at ITESM, I am thrilled to present this project to you. It's not just a website; it's a reflection of my lifelong fascination with technology and my journey of turning that curiosity into a career.",
    rolAndContribution:
      "I independently designed and developed the entire portfolio, handling both front-end and back-end implementation. This project reflects my technical expertise, creativity, and ability to build fully functional solutions from scratch.",
    urlDeploy: "https://oscarnietoespitia.xyz/",
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
    developedAtIcon: "/icons/itesm.ico",
    developedAt: "ITESM",
    description:
      "Kiara Bienes Raices is an ambitious endeavor to empower a real estate consultancy in Querétaro. This project envisions a responsive web application that streamlines property searches, offering clients an efficient way to explore available properties for sale or rent. It simplifies transaction tracking, enhancing transparency and confidence, while also connecting seamlessly with Kiara Bienes Raices' social media presence. The ultimate objectives are to provide users with 99% property information availability and real-time process visibility, reinforcing trust and saving valuable time for clients in the real estate market.",
    rolAndContribution:
      "Served as Architecture Owner, defining the system’s structure and integration strategies. Participate in the technical vision to ensure scalability, performance, and seamless integration with property management.",
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
    developedAtIcon: "/icons/itesm.ico",
    developedAt: "ITESM",
    description:
      "Gomez Morin is a transformative project focused on digitizing and optimizing the space request process at the Centro Educativo y Cultural Gomez Morin. By streamlining this procedure, the project aims to significantly reduce processing time, cut down on paperwork, and minimize physical customer interactions. Its ultimate goal is to condense a 4-hour process into just 1 hour within 15 weeks, enhancing efficiency, increasing successful requests, and improving customer satisfaction. This innovative system introduces modules for request submission, user profile management, access to vital information, communication with clients, role management, and responsiveness across devices while seamlessly coexisting with existing systems.",
    rolAndContribution:
      "Acted as both Product Owner and Developer, bridging communication between stakeholders and the development team. Defined user stories, prioritized features, and actively contributed to coding, ensuring the system reduced processing time from 4 hours to 1.",
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
    developedAtIcon: "/icons/itesm.ico",
    developedAt: "ITESM",
    description:
      "In this Kaggle competition, we harnessed machine learning to create a precise time-series forecasting model for store sales using data from a major Ecuadorian grocery retailer, Corporación Favorita. Our goal was to optimize inventory management by predicting unit sales, balancing the delicate act between overstocking and product shortages. With a top 100 submission, we developed a linear regression model, employed metrics like RMSLE, MSE, and MAE for evaluation, and even crafted a user-friendly app with Flask, React, and Tailwind CSS to make future sales predictions accessible. This project showcases our proficiency in data analysis, machine learning, and application development, all geared toward solving real-world challenges in retail forecasting.",
    rolAndContribution:
      "Focused on model training and application development. Trained a time-series forecasting model using Python and Scikit-Learn, and built the accompanying web application with Flask and React to make predictions accessible for end-users.",
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
      "Algorithmic Problem Solving",
    ],
  },
  {
    id: generateUniqueId(),
    nameProject: "Genesis",
    imgPath: "/images/projects/GENESIS.png",
    developedAtIcon: "/icons/itesm.ico",
    developedAt: "ITESM",
    description:
      "Genesis is a dynamic software department committed to achieving high competency levels, delivering quality software solutions, and advancing maturity in CMMI. Our overarching objective is to consolidate the Genesis department within a focused 15-week timeline, encompassing three key goals: reaching CMMI maturity level 2.7, fostering a Jedi-level of expertise among all team members, and consistently delivering top-notch software solutions to our esteemed Training Partners, Kiara and Gómez Morín. With a robust structure, rotating Program Managers, and agile teams managing projects like Caelum and Terra, Genesis is dedicated to continuous improvement, skill development, and innovation in software development and project management.",
    rolAndContribution:
      "Served as Project Manager, coordinating agile teams across multiple projects. Oversaw timelines, resource allocation, and delivery, ensuring alignment with CMMI maturity goals while fostering team collaboration and professional growth.",
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
    developedAtIcon: "/icons/itesm.ico",
    developedAt: "ITESM",
    description:
      "Atemporal addresses the challenges faced by emerging artists who lack opportunities and financial backing. We're developing a mobile app for event promotion, management, and optimization, empowering artists to grow professionally. The app's scope includes ticket scanning, data analysis, resource management simulation, user roles, customer support, event sharing, user feedback, and cross-platform login. Atemporal's goal is to support artists in their journey, providing them with the tools needed to succeed in the industry.",
    rolAndContribution:
      "Worked as Developer, contributing to the mobile application with Kotlin and Firebase. Focused on implementing event management features, ticket scanning, and user roles to support emerging artists in promoting and managing events.",
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
    developedAtIcon: "/icons/itesm.ico",
    developedAt: "ITESM",
    description:
      "We specialize in developing web solutions to streamline our client's administrative processes, making them more efficient and organized. Natgas, a Mexican Natural Gas Vehicle (NGV) company, faces challenges in managing internal projects and communication. Our project, Data Logic Code, aims to replace HR's communication tool, improve HR communication with other departments, automate vacation management, centralize NG Blocks permissions, enhance monthly report data entry, simplify anniversary and birthday reminders, and provide clear visualization of Natgas objectives. This integrated digital solution aims to improve communication, data management, and overall employee engagement at Natgas.",
    rolAndContribution:
      "Team of two developed the entire solution, covering both front-end and back-end. Automated HR workflows, built permission management modules, and centralized data reporting.",
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
