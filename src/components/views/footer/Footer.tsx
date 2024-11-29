import s from "./Footer.module.scss";
import Link from "next/link";
import ContactMe from "../contact/ContactMe";
import InfoRRSS from "../inforrss/InfoRRSS";

const Footer = () => {

  return (
    <footer>
      <div className={s.container} id="contact">
        <h2>Contacto</h2>
        <div className={s.containerInner}>
          <ContactMe />
          <InfoRRSS />
        </div>
        <hr className={s.divider} />
        <div className={s.foot}>
        <Link href="#top" className={s.toTop}>
          ↑ Ir al inicio
        </Link>
        <p className={s.pd}>
          Hecho con ❤️ por&nbsp;
          <Link
            href="https://github.com/Bethsyf"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Bethsyf
          </Link>
        </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
