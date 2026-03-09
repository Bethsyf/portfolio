import Image from "next/image";
import CardControl from "@/components/controls/card/CardControl";
import { FaRocket, FaGithub } from "react-icons/fa";
import s from "./ProjectCard.module.scss";
import TextControl from "@/components/controls/text/TextControl";

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
            <a
              href={project.deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver proyecto"
            >
              <FaRocket />
            </a>

            {showRepo && project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver repositorio"
              >
                <FaGithub />
              </a>
            )}
          </div>
        </header>

        <TextControl variant="caption">{project.technologies}</TextControl>
      </div>
    </CardControl>
  );
}
