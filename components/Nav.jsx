"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { motion } from "framer-motion";

const underlineVariants = {
  initial: { y: "-100%" },
  animate: {
    y: 0,
    transition: { type: "tween" },
  },
};

const links = [
  {
    pathname: "/",
    name: "home",
  },
  {
    pathname: "/my-projects",
    name: "my projects",
  },
  {
    pathname: "/contact",
    name: "contact",
  },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const pathname = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((item, index) => (
        <Link
          className={`capitalize ${linkStyles}`}
          href={item.pathname}
          key={index}
        >
          {item.pathname === pathname && (
            <motion.span
              className={underlineStyles}
              variants={underlineVariants}
              initial="initial"
              animate="animate"
              layoutId="underline"
            />
          )}
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
