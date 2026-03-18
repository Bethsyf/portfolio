import { projects } from "@/data";

import { SectionHeader, SectionLayout } from "@/components/layout";
import { TextControl } from "@/components/controls";
import { ProjectCard } from "@/components/views";

import s from "./ProjectsView.module.scss";
import { useTranslation } from "@/hooks/useTranslation";

export default function ProjectsView() {
  const t = useTranslation("projects");
  const renderProjects = (list: any[], showRepo = true) =>
    list.map((project) => <ProjectCard key={project.id} project={project} showRepo={showRepo} />);

  return (
    <section id="projects">
      <SectionLayout paddingY="8rem" align="center">
        <SectionHeader title={t.title} description={t.description} />

        <TextControl as="h3" variant="title" align="center" className={s.sectionTitle}>
          {t.academic}
        </TextControl>
        <div className={s.grid}>{renderProjects(projects.academicProjects)}</div>

        <TextControl as="h3" variant="title" align="center" className={s.sectionTitle}>
          {t.real}
        </TextControl>
        <div className={s.grid}>{renderProjects(projects.realProjects, false)}</div>
      </SectionLayout>
    </section>
  );
}
