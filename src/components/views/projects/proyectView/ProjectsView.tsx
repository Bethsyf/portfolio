import { projects } from "@/data";

import { TextControl } from "@/components/controls";
import SectionHeader from "@/components/layout/sectionHeader/SectionHeader";
import SectionLayout from "@/components/layout/sectionLayout/SectionLayout";

import ProjectCard from "../projectCard/ProjectCard";

import s from "./ProjectsView.module.scss";

export default function ProjectsView() {
  const renderProjects = (list: any[], showRepo = true) =>
    list.map((project) => <ProjectCard key={project.id} project={project} showRepo={showRepo} />);

  return (
    <section id="projects">
      <SectionLayout paddingY="8rem" align="center">
        <SectionHeader
          title="Proyectos"
          description="Proyectos que demuestran mi capacidad para desarrollar interfaces modernas,
          escalables y alineadas con las mejores prácticas de desarrollo frontend."
        />

        <TextControl as="h3" variant="title" align="center" className={s.sectionTitle}>
          Académicos
        </TextControl>
        <div className={s.grid}>{renderProjects(projects.academicProjects)}</div>

        <TextControl as="h3" variant="title" align="center" className={s.sectionTitle}>
          Reales
        </TextControl>
        <div className={s.grid}>{renderProjects(projects.realProjects, false)}</div>
      </SectionLayout>
    </section>
  );
}
