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
    Icon: AiFillProject,
    title: "Project Management",
    about:
      "Proficient in guiding <b>cross-functional teams</b>, I ensure the efficient achievement of <b>project timelines</b> and <b>objectives</b> by implementing <b>CMMI</b> practices.",
  },
  {
    id: "2",
    Icon: BsWindowFullscreen,
    title: "Frontend Development",
    about:
      "Building user-friendly interfaces by utilizing <b>HTML</b>, <b>Tailwind</b>, and <b>React</b>. Transforming design concepts into functional.",
  },
  {
    id: "3",
    Icon: AiFillDatabase,
    title: "Backend Development",
    about:
      "Constructing robust <b>server-side</b> applications using technologies like <b>Node.js</b> and <b>Python</b>, ensuring optimal data handling and functionality.",
  },
  {
    id: "4",
    Icon: AiFillCode,
    title: "Competitive Coder",
    about:
      "Avid competitive coder, with a focus on platforms like LeetCode. Consistently writing <b>step-by-step</b> solutions.",
  },
  {
    id: "5",
    Icon: BiSolidServer,
    title: "Server Infrastructure",
    about:
      "Managing and optimizing my <b>Homelab Server</b>. Currently using <b>Proxmox</b>, <b>TrueNAS</b>, <b>Kubernetes</b>, <b>Docker</b>, and <b>Cloudflare</b>.",
  },
  {
    id: "6",
    Icon: BsHddNetworkFill,
    title: "Networking",
    about:
      "Gained proficiency in network protocols, configurations, and security by experimenting with my <b>Homelab Server</b>. Currently using <b>Ubiquiti</b> gear.",
  },
  {
    id: "7",
    Icon: BiSolidNetworkChart,
    title: "Artificial Intelligence",
    about:
      "My passion lies in AI, where I've explored machine learning, data analysis, and neural networks. I've leveraged AI to develop intelligent solutions capable of adapting and evolving.",
  },
];
