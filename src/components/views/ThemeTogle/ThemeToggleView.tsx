import { useTheme } from "@/hooks/useTheme";
import ButtonControl from "@/components/controls/button/ButtonControl";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggleView() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ButtonControl
      onClick={toggleTheme}
      variant="icon"
      aria-label="Cambiar tema"
    >
      {theme === "light"
        ? <FiMoon size={18} />
        : <FiSun size={18} />}
    </ButtonControl>
  );
}