import { useTheme } from "@/hooks/useTheme";
import styles from "./ThemeToggleView.module.scss";

export default function ThemeToggleView() {

  const { theme, toggleTheme } = useTheme();

  return (

    <button
      onClick={toggleTheme}
      className={styles.toggle}
      aria-label="Cambiar tema"
    >

      {theme === "light"
        ? "🌙"
        : "☀️"}

    </button>

  );

}
