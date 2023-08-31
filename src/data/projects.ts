import { Skill } from "../data/skills";

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
  languagesAndTools?: Skill[];
  librariesAndFrameworks?: Skill[];
  databases?: Skill[];
  others?: Skill[];
}

