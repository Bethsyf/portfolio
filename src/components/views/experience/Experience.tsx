import Link from "next/link";

import { SectionHeader, SectionLayout } from "@/components/layout";
import { TextControl, CardControl } from "@/components/controls";

import { ExperienceProps } from "./Experienceprops";

import s from "./Experience.module.scss";

const experiences: ExperienceProps[] = [
  {
    role: "Desarrollador Frontend Junior",
    company: "KUTAI",
    duration: "Junio 2022 - Septiembre 2023",
    description: [
      "Desarrollé interfaces web responsivas y escalables utilizando Next.js, TypeScript y Sass, basadas en diseños UI/UX.",
      "Optimicé componentes existentes, mejorando el rendimiento, la mantenibilidad y la calidad del código.",
      "Mejoré la experiencia de usuario mediante la implementación de interacciones más intuitivas y accesibles.",
      "Integré APIs REST para gestionar y mostrar datos dinámicos dentro de las aplicaciones.",
      "Colaboré con diseñadores y desarrolladores backend para implementar nuevas funcionalidades.",
    ],
  },
];

export default function ExperienceView() {
  return (
    <section id="experience">
      <SectionLayout paddingY="8rem" align="center">
        <SectionHeader
          title="Experiencia"
          description="Experiencia profesional desarrollando interfaces frontend modernas, enfocadas en rendimiento,
          escalabilidad y una experiencia de usuario intuitiva."
        />

        <div className={s.list}>
          {experiences.map((exp) => (
            <CardControl key={exp.role} hoverable={false}>
              <header className={s.header}>
                <TextControl as="h3" variant="title" className={s.role}>
                  {exp.role}
                </TextControl>

                <Link href="https://www.kutai.co" target="_blank" rel="noopener noreferrer">
                  <TextControl variant="caption" className={s.company}>
                    {exp.company}
                  </TextControl>
                </Link>
              </header>

              <TextControl variant="caption" className={s.duration}>
                {exp.duration}
              </TextControl>

              <ul className={s.description}>
                {exp.description.map((item, index) => (
                  <li key={index}>
                    <TextControl variant="body">{item}</TextControl>
                  </li>
                ))}
              </ul>
            </CardControl>
          ))}
        </div>
      </SectionLayout>
    </section>
  );
}
