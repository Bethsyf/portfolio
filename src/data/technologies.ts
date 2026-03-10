import { IconType } from "react-icons";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiSass,
  SiTailwindcss,
  SiAxios,
  SiPostgresql,
  SiTrello,
  SiNotion,
  SiInsomnia,
  SiMongodb,
  SiPostman,
  SiSlack,
  SiVisualstudiocode,
  SiFigma,
} from "react-icons/si";

export type Technology = {
  name: string;
  icon: IconType;
  featured?: boolean;
};

export type TechnologyCategory = {
  category: string;
  items: Technology[];
};

export const technologyCategories: TechnologyCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },

      { name: "React", icon: FaReact, featured: true },
      { name: "Next.js", icon: SiNextdotjs, featured: true },
      { name: "TypeScript", icon: SiTypescript, featured: true },
      { name: "Sass", icon: SiSass, featured: true },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: SiVisualstudiocode },
      { name: "Figma", icon: SiFigma },
      { name: "Insomnia", icon: SiInsomnia },
      { name: "Postman", icon: SiPostman },
      { name: "Notion", icon: SiNotion },
      { name: "Slack", icon: SiSlack },
      { name: "Trello", icon: SiTrello },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, featured: true },
      { name: "Axios", icon: SiAxios },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
];

export const featuredTechnologies = technologyCategories
  .flatMap((category) => category.items)
  .filter((tech) => tech.featured);
