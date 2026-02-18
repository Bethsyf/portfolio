import { useEffect, useState } from "react";

type Theme =
  | "light"
  | "dark";

export function useTheme() {

  const [theme, setTheme] =
    useState<Theme>("light");

  useEffect(() => {

    const saved =
      localStorage.getItem("theme") as Theme;

    if (saved) {

      setTheme(saved);

      document.documentElement.setAttribute(
        "data-theme",
        saved
      );

    } else {

      document.documentElement.setAttribute(
        "data-theme",
        "light"
      );

    }

  }, []);

  const toggleTheme = () => {

    const newTheme =
      theme === "light"
        ? "dark"
        : "light";

    setTheme(newTheme);

    localStorage.setItem(
      "theme",
      newTheme
    );

    document.documentElement.setAttribute(
      "data-theme",
      newTheme
    );

  };

  return {

    theme,
    toggleTheme,

  };

}
