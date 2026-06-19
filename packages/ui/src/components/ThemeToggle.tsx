import { Moon, Sun } from "lucide-react";

import { useTheme } from "@elite/ui/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="text-muted hover:text-primary cursor-pointer rounded-full p-2 transition-colors"
      onClick={toggle}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}
