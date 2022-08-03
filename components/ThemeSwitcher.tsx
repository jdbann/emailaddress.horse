import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  const darkMode = resolvedTheme == "dark";
  const toggleTheme = () => setTheme(darkMode ? "light" : "dark");

  return (
    <button
      className="p-2 rounded-sm hover:bg-slate-3 focus:bg-slate-3 focus:text-slate-12 hover:text-slate-12 text-slate-11 box-border"
      onClick={toggleTheme}
      aria-label="switch between light and dark theme"
    >
      {darkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeSwitcher;
