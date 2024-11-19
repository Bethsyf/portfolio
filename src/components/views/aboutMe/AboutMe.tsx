import React from "react";
import Image from "next/image";

import s from "./AboutMe.module.scss";

import myPhoto from "../../../../public/bethsy.png";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div className={s.container}>
      <Image className={s.myPhoto} src={myPhoto} alt={""} />
      <div className={s.text}>
        <h2>Acerca de Mí</h2>
        <p>
          👋 ¡Hola! Soy Bethsy Falcon, desarrolladora Frontend con más de un año
          de experiencia, creo interfaces de usuario atractivas y funcionales.
          Haciendo uso de React, Next.js y TypeScript, contribuyo a
          proyectos web colaborativos, entregando soluciones innovadoras y
          eficientes. Mi comprensión de la integración backend me permite
          establecer una conexión fluida entre la interfaz y la lógica del
          negocio, optimizando el desarrollo y la escalabilidad de las
          aplicaciones.
        </p>
        <div className={s.buttons}>
          <Link href="https://www.linkedin.com/in/bethsyfalcon-frontend/" target="_blank" className={s.button}>LinkedIn</Link>
          <Link href="https://github.com/Bethsyf" target="_blank" className={s.button}>GitHub</Link>
          <Link   href="/cv.pdf"
              download="CV_Bethsy_Falcon"
              target='_blank' className={s.button}>Descargar CV</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
