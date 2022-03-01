import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Button from "./Button";

const ThemeSwitcher: React.FC<React.HTMLProps<HTMLButtonElement>> = (props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  const darkMode = theme == "dark";
  const toggleTheme = () => setTheme(darkMode ? "light" : "dark");

  return (
    <Button
      css={{ "& svg": { display: "block" } }}
      onClick={toggleTheme}
      type="button"
      style="ghost"
      aria-label="switch between light and dark theme"
    >
      {darkMode ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ThemeSwitcher;
