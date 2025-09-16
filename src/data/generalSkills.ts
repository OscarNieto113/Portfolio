import { IconType } from "react-icons";
import { AiFillCode, AiFillDatabase, AiFillProject } from "react-icons/ai";
import { BiSolidNetworkChart, BiSolidServer } from "react-icons/bi";
import { BsHddNetworkFill, BsWindowFullscreen } from "react-icons/bs";

export interface GeneralSkill {
  id: string;
  Icon: IconType;
  title: string;
  about: string;
}

export const generalSkills: GeneralSkill[] = [
  {
    id: "1",
    Icon: AiFillDatabase,
    title: "Data Engineering",
    about:
      "Designing and maintaining <b>data pipelines</b> to ensure reliable <b>collection, transformation, and storage</b> of information. Experienced with <b>ETL processes</b>, <b>databases</b>, and <b>data modeling</b> to enable analytics and decision-making.",
  },
  {
    id: "2",
    Icon: BiSolidServer,
    title: "Infrastructure Engineering",
    about:
      "Designing and managing <b>server environments</b> with <b>Proxmox</b>, <b>TrueNAS</b>, <b>Kubernetes</b>, <b>Docker</b>, and <b>Cloudflare</b>. Focused on <b>performance</b>, <b>reliability</b>, and <b>scalability</b> in distributed systems.",
  },
  {
    id: "3",
    Icon: BsHddNetworkFill,
    title: "Network Engineering",
    about:
      "Configuring and securing <b>network infrastructures</b> with <b>Ubiquiti</b> gear, building expertise in <b>protocols</b>, <b>routing</b>, <b>network optimization</b>, and <b>security</b> best practices.",
  },
  {
    id: "4",
    Icon: AiFillProject,
    title: "Project Management",
    about:
      "Experienced in leading <b>cross-functional teams</b>, ensuring projects meet <b>deadlines</b> and <b>objectives</b> through structured methodologies and continuous improvement practices.",
  },
  {
    id: "5",
    Icon: AiFillDatabase,
    title: "Backend Development",
    about:
      "Developing robust <b>server-side solutions</b> with <b>Node.js</b> and <b>Python</b>, ensuring efficient <b>data processing</b>, integration, and system reliability.",
  },
  {
    id: "6",
    Icon: BsWindowFullscreen,
    title: "Frontend Development",
    about:
      "Building <b>user-friendly interfaces</b> with <b>HTML</b>, <b>Tailwind</b>, and <b>React</b>, translating design concepts into responsive and scalable applications.",
  },
  {
    id: "7",
    Icon: AiFillCode,
    title: "Algorithmic Problem Solving",
    about:
      "Strengthened skills in <b>data structures</b> and <b>algorithms</b> through platforms like LeetCode, applying structured approaches to optimize solutions for complex challenges.",
  },
  {
    id: "8",
    Icon: BiSolidNetworkChart,
    title: "Artificial Intelligence",
    about:
      "Exploring <b>machine learning</b>, <b>data analysis</b>, and <b>neural networks</b>, with a focus on applying AI concepts to real-world scenarios.",
  },
];
