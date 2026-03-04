import s from "./SectionHeader.module.scss";

interface SectionHeaderProps {
  id?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  id,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <header
      id={id}
      className={`${s.header} ${s[align]}`}>
      <h2 className={s.title}>{title}</h2>
      {description && (
        <p className={s.description}>
          {description}
        </p>
      )}
    </header>
  );
}