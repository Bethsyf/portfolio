import Link from "next/link";

import { profile } from "@/data";
import { useTranslation } from "@/hooks/useTranslation";

import TextControl from "@/components/controls/text/TextControl";

import s from "./Footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();
  const tFooter = useTranslation("footer");
  const tHero = useTranslation("hero");
  return (
    <footer className={s.footer}>
      <div className={s.content}>
        <Link href="#home" className={s.toTop} aria-label={tFooter.backToTop}>
          ↑ {tFooter.backToTop}
        </Link>

        <TextControl as="p" variant="caption" className={s.copy}>
          © {year}
          <span className={s.name}> {profile.name}</span>
          <span className={s.role}> {tHero.role}</span>
        </TextControl>
      </div>
    </footer>
  );
}
