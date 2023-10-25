import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import s from './ProjectsView.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { FaGithub, FaRocket } from 'react-icons/fa';

interface ProjectsViewProps {
  title: string;
  technologies: string;
  deployUrl: string;
  repoUrl: string;
  imageUrl: string;
}

const ProjectsView = () => {
  const [projects, setProjects] = useState<ProjectsViewProps[]>([]);

  useEffect(() => {
    fetch('/src/pages/api/projects.ts')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={s.container} id="projects">
      <h2>Proyectos</h2>
      <div className={s.containerInner}>
        {projects.map((project) => (
          <div key={uuidv4()} className={s.card}>
            <div className={s.links}>
              <h3>{project.title}</h3>
              <div className={s.links}>
                <a
                  href={project.deployUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaRocket />
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </div>{' '}
            </div>
            <p>Tecnologías: {project.technologies}</p>
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
