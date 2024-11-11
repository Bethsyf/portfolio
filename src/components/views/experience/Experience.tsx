import React from 'react';
import s from './Experience.module.scss';

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    role: 'Desarrollador Frontend Junior',
    company: 'KUTAI',
    duration: 'Junio 2022 - Septiembre 2023',
    description: [
      'Traducir diseños a código con Next.js, TypeScript y Sass.',
      'Mantener y optimizar la interfaz de usuario.',
      'Mejorar la usabilidad e interacción.',
      'Conectar APIs con el Frontend para habilitar el intercambio de datos en las aplicaciones web.',
    ],
  },
];

const ExperienceView = () => {
  return (
    <section className={s.experience} id="experience">
      <h2>Experiencia</h2>
      <div className={s.experienceList}>
        {experiences.map((experience) => (
          <div key={experience.role} className={s.experienceItem}>
            <h3>{experience.role}</h3>
            <h4>{experience.company}</h4>
            <p>{experience.duration}</p>
            <ul>
              {experience.description.map((desc, index) => (
                <li key={index+1}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceView;
