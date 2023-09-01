import { Skill } from "../data/skills";
import { TbBrandNextjs } from "react-icons/tb";

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
  librariesAndFrameworks?: Skill[];
  databases?: Skill[];
  others?: Skill[];
}

export const projects: Project[] = [
  {
    id: generateUniqueId(),
    nameProject: "My Project",
    imgPath: "/path/to/image.jpg",
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
  },
];
