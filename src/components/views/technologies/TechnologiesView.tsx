import { technologyCategories } from "@/data";
import { useTranslation } from "@/hooks/useTranslation";

import { SectionHeader, SectionLayout } from "@/components/layout";
import { CardControl, TextControl } from "@/components/controls";

import s from "./Technologies.module.scss";

export default function TechnologiesView() {
  const t = useTranslation("technologies");
  return (
    <section id="technologies">
      <SectionLayout paddingY="8rem" align="center">
        <SectionHeader title={t.title} description={t.description} />
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
