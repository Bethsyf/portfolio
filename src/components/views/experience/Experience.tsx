import CardControl from "@/components/controls/card/CardControl";
import s from "./Experience.module.scss";
import { ExperienceProps } from "./Experienceprops";
import SectionHeader from "@/components/layout/sectionHeader/SectionHeader";
import SectionLayout from "@/components/layout/ssectionLayout/SectionLayout";

const experiences: ExperienceProps[] = [
  {
    role: 'Desarrollador Frontend Junior',
    company: 'KUTAI',
    duration: 'Junio 2022 - Septiembre 2023',
    description: [
      'Desarrollé interfaces web responsivas y escalables utilizando Next.js, TypeScript y Sass, basadas en diseños UI/UX.',
      'Optimicé componentes existentes, mejorando el rendimiento, la mantenibilidad y la calidad del código.',
      'Mejoré la experiencia de usuario mediante la implementación de interacciones más intuitivas y accesibles.',
      'Integré APIs REST para gestionar y mostrar datos dinámicos dentro de las aplicaciones.',
      'Colaboré con diseñadores y desarrolladores backend para implementar nuevas funcionalidades.',
    ],
  }
];

export default function ExperienceView() {
  return (
    <section id="experience">
      <SectionLayout paddingY="8rem" align="left">
        <SectionHeader title="Experiencia" description=" Experiencia profesional desarrollando interfaces frontend modernas, enfocadas en rendimiento,
          escalabilidad y una experiencia de usuario intuitiva." align="center" />
        <div className={s.list}>
          {experiences.map((exp) => (
            <CardControl key={exp.role} hoverable={false}>
              <header className={s.header}>
                <h3>{exp.role}</h3>
                <span>{exp.company}</span>
              </header>
              <p className={s.duration}>
                {exp.duration}
              </p>
              <ul className={s.description}>
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardControl>
          ))}
        </div>
      </SectionLayout>
    </section>
  );
}