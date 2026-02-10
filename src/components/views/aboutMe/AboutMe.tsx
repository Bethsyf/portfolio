import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import myPhoto from "../../../../public/bethsy.png";
import styles from "./AboutMe.module.scss";

type Button = {
  href: string;
  label: React.ReactNode;
  ariaLabel: string;
  external?: boolean;
  download?: boolean;
};

const AboutMe = () => {
  const buttons: Button[] = [
    {
      href: "https://www.linkedin.com/in/bethsyfalcon-frontend/",
      label: <FaLinkedinIn />,
      ariaLabel: "Visitar LinkedIn",
      external: true,
    },
    {
      href: "https://github.com/Bethsyf",
      label: <FaGithub />,
      ariaLabel: "Visitar GitHub",
      external: true,
    },
    {
      href: "/cv.pdf",
      label: (
        <>
          <FiDownload /> CV
        </>
      ),
      ariaLabel: "Descargar CV",
      download: true,
    },
  ];

  return (
    <section className={styles.container}>
      <Image
        className={styles.myPhoto}
        src={myPhoto}
        alt="Fotografía de Bethsy Falcon"
        priority
        sizes="(max-width: 768px) 150px, 250px"
      />

      <div className={styles.text}>
        <h2>Acerca de Mí</h2>

        <p>
          👋 ¡Hola! Soy Bethsy Falcon, desarrolladora Frontend con más de un año
          de experiencia creando interfaces de usuario atractivas y funcionales.
          Trabajo con React, Next.js y TypeScript para construir experiencias
          web modernas. También tengo comprensión de integración backend, lo que
          me permite conectar la interfaz con la lógica del negocio y mejorar la
          escalabilidad de las aplicaciones.
        </p>

        <div className={styles.buttons}>
          {buttons.map(
            ({ href, label, ariaLabel, external, download }) => (
              <a
                key={href}
                href={href}
                aria-label={ariaLabel}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                download={download}
                className={styles.button}
              >
                {label}
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
