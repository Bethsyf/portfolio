import { IconType } from "react-icons";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiAxios, SiNextdotjs, SiSass, SiTailwindcss, SiTypescript } from "react-icons/si";

import SectionHeader from "@/components/layout/sectionHeader/SectionHeader";
import SectionLayout from "@/components/layout/sectionLayout/SectionLayout";

import s from "./Technologies.module.scss";
import { technologies } from "@/data/technologies";

export default function TechnologiesView() {
  return (
    <section id="technologies">
      <SectionLayout paddingY="8rem" align="center">
        <SectionHeader
          title="Tecnologías"
          description="Este es el stack de tecnologías con el que trabajo para desarrollar aplicaciones frontend modernas, priorizando rendimiento, escalabilidad y una experiencia de usuario sólida."
        />

        <ul className={s.techList}>
          {technologies.map(({ name, icon: Icon }) => (
            <li key={name} className={s.techItem}>
              <Icon className={s.icon} aria-label={name} role="img" />
              <span className={s.label}>{name}</span>
            </li>
          ))}
        </ul>
      </SectionLayout>
    </section>
  );
}
