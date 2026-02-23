import { IconType } from "react-icons";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiAxios,
  SiNextdotjs,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import s from "./Technologies.module.scss";

type Technology = {
  name: string;
  icon: IconType;
};

const technologies: Technology[] = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Sass", icon: SiSass },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Axios", icon: SiAxios },
  { name: "Node.js", icon: FaNodeJs },
];

export default function TechnologiesView() {
  return (
    <section className={s.technologies} id="technologies">
      <h2>Tecnologías</h2>

      <p className={s.introText}>
        Estas son las tecnologías que forman parte de mi stack y con las que
        tengo experiencia. Las utilizo para crear soluciones eficientes y
        escalables en mis proyectos.
      </p>

      <div className={s.techList}>
        {technologies.map(({ name, icon: Icon }) => (
          <article key={name} className={s.techItem}>
            <Icon className={s.icon} aria-hidden="true" />
            <p>{name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}