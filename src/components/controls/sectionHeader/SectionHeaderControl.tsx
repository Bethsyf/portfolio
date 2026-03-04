import s from "./SectionHeaderControl.module.scss";

interface SectionHeaderControlProps {
  id?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeaderControl({
  id,
  title,
  description,
  align = "left",
}: SectionHeaderControlProps) {
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