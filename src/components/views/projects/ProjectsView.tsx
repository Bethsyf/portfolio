import Image from "next/image";
import s from "./ProjectsView.module.scss";
import { FaGithub, FaRocket } from "react-icons/fa";
import projects from "@/utils/projects.json";
import CardControl from "@/components/controls/card/CardControl";
import SectionHeader from "@/components/layout/sectionHeader/SectionHeader";
import SectionLayout from "@/components/layout/sectionLayout/SectionLayout";

interface Project {
  title: string;
  technologies: string;
  deployUrl: string;
  repoUrl?: string;
  imageUrl: string;
}

export default function ProjectsView() {
  const renderProjects = (list: Project[], showRepo: boolean = true) => {
    return list.map((project) => (
      <CardControl key={project.title}>
        <Image
          src={project.imageUrl}
          alt={`Preview ${project.title}`}
          width={400}
          height={220}
          className={s.image}
        />
        <div className={s.content}>
          <header className={s.header}>
            <h3>{project.title}</h3>
            <div className={s.links}>
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver proyecto"
              >
                <FaRocket />
              </a>
              {showRepo && project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver repositorio"
                >
                  <FaGithub />
                </a>
              )}
            </div>
          </header>
          <p className={s.tech}>{project.technologies}</p>
        </div>
      </CardControl>
    ));
  };

  return (
    <div id="projects">
      <SectionLayout paddingY="8rem" align="center">
        <SectionHeader
          title="Proyectos"
          description="Proyectos que demuestran mi capacidad para desarrollar interfaces modernas, 
        escalables y alineadas con las mejores prácticas de desarrollo frontend."
        />
        <h3 className={s.sectionTitle}>Académicos</h3>
        <div className={s.grid}>{renderProjects(projects.academicProjects)}</div>
        <h3 className={s.sectionTitle}>Reales</h3>
        <div className={s.grid}>{renderProjects(projects.realProjects, false)}</div>
      </SectionLayout>
    </div>
  );
}
