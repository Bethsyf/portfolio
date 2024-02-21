import React from 'react';
import Image from 'next/image';

import s from './AboutMe.module.scss';

import myPhoto from '../../../../public/bethsy.png';

const AboutMe = () => {
  return (
    <div className={s.container}>
      <Image className={s.myPhoto} src={myPhoto} alt={''} />
      <div className={s.text}>
        <h2>Acerca de Mí</h2>
        <p>
          👋 ¡Hola! Soy Bethsy Falcon, una apasionada desarrolladora frontend
          con un poco más de un año de experiencia en la creación de
          experiencias web atractivas. 💻 Mi conjunto de habilidades incluye la
          manipulación de tecnologías clave como HTML, CSS y JavaScript, junto
          con la creación de aplicaciones web dinámicas utilizando React,
          Next.js y TypeScript. <br/>
          Además, estoy familiarizada con la colaboración
          en proyectos de desarrollo a través de GitHub, lo que me permite
          trabajar de manera efectiva en equipos y contribuir al código abierto.
          🤝 Estoy comprometida con la creación de interfaces de usuario
          elegantes y funcionales que brinden experiencias excepcionales a los
          usuarios. 😊🚀
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
