"use client";
import "./globals.css";
import { useEffect } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

const ThemeSwitcher = ({ mounted, setMounted, theme, setTheme }) => {
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "light" ? <BiSolidMoon /> : <BiSolidSun />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
