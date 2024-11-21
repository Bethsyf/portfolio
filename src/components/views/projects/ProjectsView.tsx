import React from 'react';
import Image from 'next/image';
import s from './ProjectsView.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { FaGithub, FaRocket } from 'react-icons/fa';
import projects from '@/utils/projects.json';

interface ProjectsViewProps {
  title: string;
  technologies: string;
  deployUrl: string;
  repoUrl?: string;
  imageUrl: string;
}

const ProjectsView = () => {
  return (
    <div className={s.container} id="projects">
      <h2>Proyectos</h2>
      <p className={s.introText}>
        A continuación te muestro algunos de los proyectos en los que he trabajado. Cada uno
        de estos refleja mis habilidades en desarrollo frontend y mi capacidad para implementar
        soluciones innovadoras utilizando tecnologías modernas. Haz clic en los enlaces para ver más detalles.
      </p>
      <h3>Académicos</h3>
      <div className={s.containerInner}>
        {projects.academicProjects.map((project: ProjectsViewProps) => (
          <div key={uuidv4()} className={s.card}>
            <div className={s.links}>
              <h3>{project.title}</h3>
              <div className={s.links}>
                <a
                  href={project.deployUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaRocket className={s.icon} />
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className={s.icon} />
                </a>
              </div>{' '}
            </div>
            <p>{project.technologies}</p>
            <Image
              className={s.imageCard}
              src={project.imageUrl}
              alt={project.title}
              width={350}
              height={200}
            />
          </div>
        ))}
      </div>
      <h3>Reales</h3>
      <div className={s.containerInner}>
        {projects.realProjects.map((project: ProjectsViewProps) => ( 
          <div key={uuidv4()} className={s.card}>
            <div className={s.links}>
              <h3>{project.title}</h3>
              <div className={s.links}>
                <a
                  href={project.deployUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaRocket className={s.icon} />
                </a>
              </div>{' '}
            </div>
            <p>{project.technologies}</p>
            <Image
              className={s.imageCard}
              src={project.imageUrl}
              alt={project.title}
              width={350}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsView;
