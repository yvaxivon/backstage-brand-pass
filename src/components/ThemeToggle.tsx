import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (light) root.classList.add("light-mode");
    else root.classList.remove("light-mode");
  }, [light]);

  return (
    <button
      onClick={() => setLight((v) => !v)}
      aria-label="Toggle theme"
      className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center transition hover:bg-black/80"
    >
      {light ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
    </button>
  );
};

export default ThemeToggle;
