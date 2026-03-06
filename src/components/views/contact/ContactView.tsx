import s from "./ContactView.module.scss";
import ContactForm from "./ContactForm";
import InfoRRSS from "../inforrss/InfoRRSS";
import SectionHeader from "@/components/layout/sectionHeader/SectionHeader";
import SectionLayout from "@/components/layout/sectionLayout/SectionLayout";

export default function ContactView() {
  return (
    <section id="contact">
      <SectionLayout paddingY="8rem" align="center">
        <div className={s.content}>
          <SectionHeader
            title={"Contacto"}
            description="¿Tienes una oportunidad o proyecto en mente?
            Estaré encantada de conversar contigo."
          />
          <div className={s.grid}>
            <ContactForm />
            <InfoRRSS />
          </div>
        </div>
      </SectionLayout>
    </section>
  );
}
