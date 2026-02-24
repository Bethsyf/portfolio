import s from "./ContactSection.module.scss";
import ContactMe from "./ContactMe";
import InfoRRSS from "../inforrss/InfoRRSS";

export default function ContactSection() {
  return (
    <section className={s.container} id="contact">
      <div className={s.content}>
        <h2 className={s.title}>
          Contacto
        </h2>
        <p className={s.subtitle}>
          ¿Tienes una oportunidad o proyecto en mente?
          Estaré encantada de conversar contigo.
        </p>
        <div className={s.grid}>
          <ContactMe />
          <InfoRRSS />
        </div>
      </div>
    </section>
  );
}