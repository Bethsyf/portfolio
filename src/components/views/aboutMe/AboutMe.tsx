import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import myPhoto from "../../../../public/bethsy.png";
import styles from "./AboutMe.module.scss";

export default function AboutMe() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <h1>
          Bethsy Falcon
        </h1>
        <h2>
          Frontend Developer
        </h2>
        <p>
          👋 ¡Hola! Soy Bethsy Falcon, desarrolladora Frontend con más de un año
          de experiencia creando interfaces de usuario atractivas y funcionales.
          Trabajo con React, Next.js y TypeScript para construir experiencias
          web modernas. También tengo comprensión de integración backend, lo que
          me permite conectar la interfaz con la lógica del negocio y mejorar la
          escalabilidad de las aplicaciones.
        </p>
        <div className={styles.buttons}>
          <a
            href="/cv.pdf"
            download
            className={styles.primary}
          >
            <FiDownload />
            Descargar CV
          </a>
          <a
            href="https://github.com/Bethsyf"
            target="_blank"
            className={styles.secondary}
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className={styles.secondary}
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.imageWrapper}>
          <Image
            src={myPhoto}
            alt="Bethsy Falcon"
            fill
            priority
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
