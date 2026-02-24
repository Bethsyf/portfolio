import s from "./Footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.content}>
        <Link href="#home" className={s.toTop}>
          ↑ Volver al inicio
        </Link>
        <p className={s.copy}>
          © {new Date().getFullYear()} Bethsy Falcon
          <span>
            Frontend Developer
          </span>
        </p>
      </div>
    </footer>
  );
}