import Image from "next/image";

import { FaGithub, FaLinkedinIn, FaNodeJs, FaReact } from "react-icons/fa";
import { FiDownload, FiGrid } from "react-icons/fi";
import { SiNextdotjs, SiSass, SiTypescript } from "react-icons/si";

import myPhoto from "../../../../public/bethsy.png";

import ButtonControl from "@/components/controls/button/ButtonControl";
import TextControl from "@/components/controls/text/TextControl";

import styles from "./HeroView.module.scss";

const technologies = [
  { Icon: FaReact, label: "React" },
  { Icon: SiNextdotjs, label: "Next.js" },
  { Icon: SiTypescript, label: "TypeScript" },
  { Icon: SiSass, label: "SCSS / Sass" },
  { Icon: FaNodeJs, label: "Node.js" },
];

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

          <TextControl variant="body" className={styles.description}>
            Soy desarrolladora Frontend especializada en React, Next.js y TypeScript. Construyo
            interfaces modernas, escalables y centradas en el usuario.
          </TextControl>
        </div>

        <div className={styles.techStack}>
          {technologies.map(({ Icon, label }) => (
            <Icon key={label} aria-label={label} title={label} />
          ))}
        </div>

        <div className={styles.buttons}>
          <ButtonControl href="#projects">
            <FiGrid />
            Ver proyectos
          </ButtonControl>

          <ButtonControl href="/cv.pdf" download>
            <FiDownload />
            Descargar CV
          </ButtonControl>

          <ButtonControl
            href="https://github.com/Bethsyf"
            target="_blank"
            rel="noopener noreferrer"
            variant="icon"
            aria-label="Github"
          >
            <FaGithub />
          </ButtonControl>

          <ButtonControl
            href="https://linkedin.com/in/bethsyfalcon-frontend"
            target="_blank"
            rel="noopener noreferrer"
            variant="icon"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </ButtonControl>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.imageWrapper}>
          <Image
            src={myPhoto}
            alt="Bethsy Falcon - Frontend Developer"
            fill
            priority
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
