import React from 'react';

import s from './Projects.module.scss';

const ProjectsGrid = () => {
  const projects = [
    {
      title: 'Proyecto 1',
      description: 'Descripción del proyecto 1',
      url: 'https://ejemplo.com/proyecto1',
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción del proyecto 2',
      url: 'https://ejemplo.com/proyecto2',
    },
    {
      title: 'Proyecto 3',
      description: 'Descripción del proyecto 3',
      url: 'https://ejemplo.com/proyecto3',
    },
  ];

  return (
    <div className={s.container} id="projects">
      <h2>Proyectos</h2>
      <div className={s.containerInner}>
        {projects.map((project, index) => (
          <div key={index} className={s.card}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              Ver proyecto
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;
