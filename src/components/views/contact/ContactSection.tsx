import s from "./ContactSection.module.scss";
import ContactMe from "./ContactMe";
import InfoRRSS from "../inforrss/InfoRRSS";
import SectionHeader from "@/components/controls/sectionHeader/SectionHeader";

export default function ContactSection() {
  return (
    <section className={s.container} id="contact">
      <div className={s.content}>
        <SectionHeader title={"Contacto"} description="¿¿Tienes una oportunidad o proyecto en mente?
          Estaré encantada de conversar contigo." align="center"></SectionHeader>
        <div className={s.grid}>
          <ContactMe />
          <InfoRRSS />
        </div>
      </div>
    </section>
  );
}