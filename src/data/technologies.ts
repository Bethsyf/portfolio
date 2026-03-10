import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import { SiNextdotjs, SiTypescript, SiSass, SiTailwindcss, SiAxios } from "react-icons/si";

export type Technology = {
  name: string;
  icon: React.ElementType;
  featured?: boolean;
};

export const technologies: Technology[] = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },

  { name: "React", icon: FaReact, featured: true },
  { name: "Next.js", icon: SiNextdotjs, featured: true },
  { name: "TypeScript", icon: SiTypescript, featured: true },
  { name: "Sass", icon: SiSass, featured: true },

  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Axios", icon: SiAxios },
  { name: "Node.js", icon: FaNodeJs, featured: true },
];
