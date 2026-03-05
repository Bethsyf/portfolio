import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import myPhoto from "../../../../public/bethsy.png";
import ButtonControl from "@/components/controls/button/ButtonControl";
import styles from "./HeroView.module.scss";
import TextControl from "@/components/controls/text/TextControl";

export default function HeroView() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <div className={styles.textBlock}>
          <TextControl as="h1" variant="hero">
            Bethsy Falcon
          </TextControl>

          <TextControl as="h2" variant="label">
            Frontend Developer
          </TextControl>

          <TextControl
            variant="body"
            className={styles.description}
          >
            👋 Soy Bethsy Falcon, desarrolladora Frontend especializada en React,
            Next.js y TypeScript. Me enfoco en crear interfaces modernas,
            escalables y centradas en el usuario, integrando frontend con backend
            para construir aplicaciones completas y eficientes.
          </TextControl>
        </div>

        <div className={styles.buttons}>
          <ButtonControl href="/cv.pdf" download>
            <FiDownload />
            Descargar CV
          </ButtonControl>

          <ButtonControl
            href="https://github.com/Bethsyf"
            target="_blank"
            rel="noopener noreferrer"
            variant="icon"
          >
            <FaGithub />
          </ButtonControl>

          <ButtonControl
            href="https://linkedin.com/in/bethsyfalcon-frontend"
            target="_blank"
            rel="noopener noreferrer"
            variant="icon"
          >
            <FaLinkedinIn />
          </ButtonControl>
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