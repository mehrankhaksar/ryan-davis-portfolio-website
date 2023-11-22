"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { motion } from "framer-motion";

const activeLinkVariants = {
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

const Nav = ({
  mobileNav = false,
  containerStyles,
  linkStyles,
  activeLinkStyles,
}) => {
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
              className={activeLinkStyles}
              variants={!mobileNav && activeLinkVariants}
              initial="initial"
              animate="animate"
              layoutId="active-link"
            />
          )}
          <span className="relative">{item.name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
