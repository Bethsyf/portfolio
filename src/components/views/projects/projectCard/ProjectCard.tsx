import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import { ButtonControl, CardControl, TextControl } from "@/components/controls";

import s from "./ProjectCard.module.scss";

interface Project {
  title: string;
  imageUrl: string;
  deployUrl: string;
  repoUrl?: string;
  technologies: string;
}

interface ProjectCardProps {
  project: Project;
  showRepo?: boolean;
}

export default function ProjectCard({ project, showRepo = true }: ProjectCardProps) {
  return (
    <CardControl>
      <Image
        src={project.imageUrl}
        alt={`Preview ${project.title}`}
        width={400}
        height={220}
        className={s.image}
      />

      <div className={s.content}>
        <header className={s.header}>
          <TextControl as="h3" variant="title">
            {project.title}
          </TextControl>

          <div className={s.links}>
            <ButtonControl
              href={project.deployUrl}
              target="_blank"
              variant="icon"
              aria-label="Ver proyecto"
            >
              <FaExternalLinkAlt />
            </ButtonControl>

            {project.repoUrl && (
              <ButtonControl
                href={project.repoUrl}
                target="_blank"
                variant="icon"
                aria-label="Ver repositorio"
              >
                <FaGithub />
              </ButtonControl>
            )}
          </div>
        </header>

        <TextControl variant="caption">{project.technologies}</TextControl>
      </div>
    </CardControl>
  );
}
