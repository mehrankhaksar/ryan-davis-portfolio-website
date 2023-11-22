"use client";

import { useTheme } from "next-themes";

import { Button } from "./ui/button";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className="py-2.5 px-2.5 rounded-full"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <MoonIcon className="w-[1.2rem] h-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <SunIcon className="w-[1.2rem] h-[1.2rem] absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
};

export default ThemeToggler;
