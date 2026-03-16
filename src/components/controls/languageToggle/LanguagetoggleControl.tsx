import ButtonControl from "@/components/controls/button/ButtonControl";
import { useLanguage } from "@/hooks/useLanguage";

export default function LanguageToggleControl() {
  const { locale, toggleLanguage } = useLanguage();

  return (
    <ButtonControl onClick={toggleLanguage} variant="icon" aria-label="Cambiar idioma">
      {locale === "es" ? "EN" : "ES"}
    </ButtonControl>
  );
}
