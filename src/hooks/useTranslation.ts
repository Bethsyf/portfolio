import { useRouter } from "next/router";
import { translations } from "@/lib/i18n";

type Locale = "es" | "en";

export function useTranslation(section: keyof (typeof translations)["es"]) {
  const { locale } = useRouter();

  const currentLocale = (locale || "es") as Locale;

  return translations[currentLocale][section];
}
