import { ContactForm, InfoRRSS } from "@/components/views";

import { SectionHeader, SectionLayout } from "@/components/layout";
import { TextControl, CardControl } from "@/components/controls";

import s from "./ContactView.module.scss";

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

            <CardControl hoverable={false} className={s.rightColumn}>
              <InfoRRSS />

              <div className={s.infoBlock}>
                <div className={s.infoGroup}>
                  <TextControl variant="label">Ubicación</TextControl>
                  <TextControl>Medellín, Colombia</TextControl>
                </div>

                <div className={s.infoGroup}>
                  <TextControl variant="label">Zona horaria</TextControl>
                  <TextControl>GMT-5</TextControl>
                </div>

                <div className={s.infoGroup}>
                  <TextControl variant="label">Trabajo remoto</TextControl>
                  <TextControl>Disponible globalmente</TextControl>
                </div>
              </div>
            </CardControl>
          </div>
        </div>
      </SectionLayout>
    </section>
  );
}
