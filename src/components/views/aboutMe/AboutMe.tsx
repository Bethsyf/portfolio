import React from "react";
import Image from "next/image";
import Link from "next/link";
import myPhoto from "../../../../public/bethsy.png";
import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  const buttons = [
    {
      href: "https://www.linkedin.com/in/bethsyfalcon-frontend/",
      label: "LinkedIn",
    },
    {
      href: "https://github.com/Bethsyf",
      label: "GitHub",
    },
    {
      href: "/cv.pdf",
      label: "Descargar CV",
      download: true,
    },
  ];

  return (
    <section className={styles.container}>
      <Image
        className={styles.myPhoto}
        src={myPhoto}
        alt="Photograph of Bethsy Falcon"
      />
      <div className={styles.text}>
        <h2>Acerca de Mí</h2>
        <p>
          👋 ¡Hola! Soy Bethsy Falcon, desarrolladora Frontend con más de un año
          de experiencia, creo interfaces de usuario atractivas y funcionales.
          Haciendo uso de React, Next.js y TypeScript, contribuyo a proyectos
          web colaborativos, entregando soluciones innovadoras y eficientes. Mi
          comprensión de la integración backend me permite establecer una
          conexión fluida entre la interfaz y la lógica del negocio, optimizando
          el desarrollo y la escalabilidad de las aplicaciones.
        </p>
        <div className={styles.buttons}>
          {buttons.map(({ href, label, download }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              download={download || undefined}
              className={styles.button}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
