import { useRouter } from "next/router";
import { translations } from "@/lib/i18n";

type Locale = "es" | "en";

type Translations = (typeof translations)["es"];

export function useTranslation<K extends keyof Translations>(section: K): Translations[K] {
  const { locale } = useRouter();

  const currentLocale = (locale || "es") as Locale;

  return translations[currentLocale][section];
}
