import s from "./Footer.module.scss";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={s.footer}>
      <div className={s.content}>
        <Link
          href="#home"
          className={s.toTop}
          aria-label="Volver al inicio"
        >
          ↑ Volver al inicio
        </Link>
        <p className={s.copy}>
          © {year}
          <span className={s.name}>
            Bethsy Falcon
          </span>
          <span className={s.role}>
            Frontend Developer
          </span>
        </p>
      </div>
    </footer>
  );
}