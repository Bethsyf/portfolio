import { useRouter } from "next/router";

export function useLanguage() {
  const router = useRouter();
  const { locale, asPath } = router;

  const toggleLanguage = () => {
    const newLocale = locale === "es" ? "en" : "es";
    router.push(asPath, asPath, { locale: newLocale });
  };

  return {
    locale,
    toggleLanguage,
  };
}
