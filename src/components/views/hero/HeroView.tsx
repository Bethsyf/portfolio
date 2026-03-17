import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaNodeJs, FaReact } from "react-icons/fa";
import { FiDownload, FiGrid } from "react-icons/fi";

import { featuredTechnologies } from "@/data";
import { profile } from "@/data";
import myPhoto from "../../../../public/bethsy.png";
import { useTranslation } from "@/hooks/useTranslation";

import ButtonControl from "@/components/controls/button/ButtonControl";
import TextControl from "@/components/controls/text/TextControl";

import s from "./HeroView.module.scss";

export default function HeroView() {
  const t = useTranslation("hero");

  return (
    <section className={s.container}>
      <div className={s.left}>
        <div className={s.textBlock}>
          <TextControl as="h1" variant="hero">
            {profile.name}
          </TextControl>

          <TextControl as="h2" variant="label">
            {t.role}
          </TextControl>

          <TextControl variant="body" className={s.description}>
            {t.description}
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
            {t.projects}
          </ButtonControl>

          <ButtonControl href={profile.cv} download>
            <FiDownload />
            {t.download}
          </ButtonControl>

          <ButtonControl
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="icon"
            aria-label={t.github}
          >
            <FaGithub />
          </ButtonControl>

          <ButtonControl
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            variant="icon"
            aria-label={t.linkedin}
          >
            <FaLinkedinIn />
          </ButtonControl>
        </div>
      </div>

      <div className={s.right}>
        <div className={s.imageWrapper}>
          <Image src={myPhoto} alt={t.alt} fill priority className={s.image} />
        </div>
      </div>
    </section>
  );
}
