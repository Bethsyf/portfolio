import Link from "next/link";

import { useTranslation } from "@/hooks/useTranslation";
import { ExperienceProps } from "./Experienceprops";

import { SectionHeader, SectionLayout } from "@/components/layout";
import { TextControl, CardControl } from "@/components/controls";

import s from "./Experience.module.scss";

export default function ExperienceView() {
  const t = useTranslation("experiences");
  return (
    <section id="experience">
      <SectionLayout paddingY="8rem" align="center">
        <SectionHeader title={t.title} description={t.description} />

        <div className={s.list}>
          {t.items.map((exp: ExperienceProps) => (
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
