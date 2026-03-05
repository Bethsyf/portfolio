import TextControl from "@/components/controls/text/TextControl";
import s from "./SectionHeader.module.scss";

interface SectionHeaderProps {
  id?: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ id, title, description }: SectionHeaderProps) {
  return (
    <header id={id} className={s.header}>
      <TextControl as="h2" variant="title" align="center">
        {title}
      </TextControl>
      {description && (
        <TextControl variant="subtitle" align="justify" className={s.description}>
          {description}
        </TextControl>
      )}
    </header>
  );
}
