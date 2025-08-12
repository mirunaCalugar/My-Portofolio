import { useEffect, useState } from "react";

const KEY = "theme";

export default function ThemeToggle() {
  const systemPrefersDark =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useState(
    localStorage.getItem(KEY) || (systemPrefersDark ? "dark" : "light")
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(KEY, theme);
  }, [theme]);

  return (
    <button
      className="btn theme-toggle"
      onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
      aria-label="Schimbă tema"
      title="Schimbă tema"
    >
      {theme === "light" ? "🌞" : "🌙"}
    </button>
  );
}
