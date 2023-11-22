"use client";

import React from "react";

import { usePathname } from "next/navigation";

import Logo from "./Logo";
import Nav from "./Nav";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  const [scroll, setScroll] = React.useState(false);

  const pathname = usePathname();

  React.useEffect(() => {
    const isScrolled = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setScroll(true) : setScroll(false);
    });

    return () => window.removeEventListener("scroll", isScrolled);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 ${
        scroll
          ? `${
              pathname === "/" && "bg-[#fef9f5]"
            } py-4 shadow-lg transition-all dark:bg-accent`
          : `${
              pathname === "/"
                ? "bg-[#fef9f5] dark:bg-transparent"
                : "bg-transparent"
            } py-6`
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-5">
            <Nav
              containerStyles="hidden xl:flex items-center gap-x-5"
              linkStyles="relative transition-all hover:text-primary"
              underlineStyles="w-full h-1 absolute top-full left-0 bg-primary rounded-sm"
            />
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
