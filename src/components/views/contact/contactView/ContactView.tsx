import { useTranslation } from "@/hooks/useTranslation";

import { ContactForm, InfoRRSS } from "@/components/views";
import { SectionHeader, SectionLayout } from "@/components/layout";
import { TextControl, CardControl } from "@/components/controls";

import s from "./ContactView.module.scss";

export default function ContactView() {
  const t = useTranslation("contact");
  return (
    <section id="contact">
      <SectionLayout paddingY="8rem" align="center">
        <div className={s.content}>
          <SectionHeader title={t.title} description={t.description} />

          <div className={s.grid}>
            <ContactForm />

            <CardControl hoverable={false} className={s.rightColumn}>
              <InfoRRSS />

              <div className={s.infoBlock}>
                <div className={s.infoGroup}>
                  <TextControl variant="label">{t.location}</TextControl>
                  <TextControl>{t.locationValue}</TextControl>
                </div>

                <div className={s.infoGroup}>
                  <TextControl variant="label">{t.timezone}</TextControl>
                  <TextControl>{t.timezoneValue}</TextControl>
                </div>

                <div className={s.infoGroup}>
                  <TextControl variant="label">{t.remote}</TextControl>
                  <TextControl>{t.remoteValue}</TextControl>
                </div>
              </div>
            </CardControl>
          </div>
        </div>
      </SectionLayout>
    </section>
  );
}
