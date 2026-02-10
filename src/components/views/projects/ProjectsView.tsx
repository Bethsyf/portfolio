import React from 'react';
import Image from 'next/image';
import s from './ProjectsView.module.scss';
import { FaGithub, FaRocket } from 'react-icons/fa';
import projects from '@/utils/projects.json';

interface Project {
  title: string;
  technologies: string;
  deployUrl: string;
  repoUrl?: string;
  imageUrl: string;
}

const ProjectsView: React.FC = () => {
  const renderProjects = (projectList: Project[], showRepo: boolean = true) =>
    projectList.map((project) => (
      <div key={project.title} className={s.card}>
        <div className={s.cardHeader}>
          <h3>{project.title}</h3>
          <div className={s.cardLinks}>
            <a
              href={project.deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver despliegue de ${project.title}`}
            >
              <FaRocket className={s.icon} />
            </a>
            {showRepo && project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver repositorio de ${project.title}`}
              >
                <FaGithub className={s.icon} />
              </a>
            )}
          </div>
        </div>
        <p className={s.technologies}>{project.technologies}</p>
        <Image
          className={s.imageCard}
          src={project.imageUrl}
          alt={`Captura de ${project.title}`}
          width={350}
          height={200}
        />
      </div>
    ));

  return (
    <section className={s.container} id="projects">
      <h2>Proyectos</h2>
      <p className={s.introText}>
        A continuación te muestro algunos de los proyectos en los que he trabajado.
        Cada uno refleja mis habilidades en desarrollo frontend y mi capacidad para implementar
        soluciones innovadoras utilizando tecnologías modernas. Haz clic en los enlaces para ver más detalles.
      </p>

      <h3>Académicos</h3>
      <div className={s.containerInner}>
        {renderProjects(projects.academicProjects)}
      </div>

      <h3>Reales</h3>
      <div className={s.containerInner}>
        {renderProjects(projects.realProjects, false)}
      </div>
    </section>
  );
};

export default ProjectsView;
