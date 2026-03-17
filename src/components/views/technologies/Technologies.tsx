import { technologyCategories } from "@/data/technologies";

import SectionHeader from "@/components/layout/sectionHeader/SectionHeader";
import SectionLayout from "@/components/layout/sectionLayout/SectionLayout";
import { CardControl, TextControl } from "@/components/controls";

import s from "./Technologies.module.scss";

export default function TechnologiesView() {
  return (
    <section id="technologies">
      <SectionLayout paddingY="8rem" align="center">
        <SectionHeader
          title="Tecnologías"
          description="Este es el stack de tecnologías y herramientas con el que trabajo para desarrollar aplicaciones web modernas, priorizando rendimiento, escalabilidad y una experiencia de usuario sólida."
        />
        <div className={s.categories}>
          {technologyCategories.map(({ category, items }) => (
            <CardControl key={category} className={s.categoryCard}>
              <TextControl as="h3" variant="title" align="center" className={s.categoryTitle}>
                {category}
              </TextControl>

              <ul className={s.techList}>
                {items.map(({ name, icon: Icon }) => (
                  <li key={name} className={s.techItem}>
                    <Icon className={s.icon} />
                    <span className={s.label}>{name}</span>
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
