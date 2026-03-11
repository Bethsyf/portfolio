import Image from "next/image";

import { FaGithub, FaLinkedinIn, FaNodeJs, FaReact } from "react-icons/fa";
import { FiDownload, FiGrid } from "react-icons/fi";

import { featuredTechnologies } from "@/data/technologies";
import myPhoto from "../../../../public/bethsy.png";

import ButtonControl from "@/components/controls/button/ButtonControl";
import TextControl from "@/components/controls/text/TextControl";

import s from "./HeroView.module.scss";

export default function HeroView() {
  return (
    <section className={s.container}>
      <div className={s.left}>
        <div className={s.textBlock}>
          <TextControl as="h1" variant="hero">
            Bethsy Falcon
          </TextControl>

          <TextControl as="h2" variant="label">
            Frontend Developer
          </TextControl>

          <TextControl variant="body" className={s.description}>
            Soy desarrolladora Frontend especializada en React, Next.js y TypeScript. Construyo
            interfaces modernas, escalables y centradas en el usuario.
          </TextControl>
        </div>

        <div className={s.techStack}>
          {featuredTechnologies.map(({ name, icon: Icon }) => (
            <Icon key={name} aria-label={name} />
          ))}
        </div>

        <div className={s.buttons}>
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

      <div className={s.right}>
        <div className={s.imageWrapper}>
          <Image
            src={myPhoto}
            alt="Bethsy Falcon - Frontend Developer"
            fill
            priority
            className={s.image}
          />
        </div>
      </div>
    </section>
  );
}
