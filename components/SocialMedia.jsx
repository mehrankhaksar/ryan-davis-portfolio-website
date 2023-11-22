"use client";

import Link from "next/link";
import {
  RiYoutubeFill,
  RiLinkedinBoxFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstallFill,
} from "react-icons/ri";

const socialMedia = [
  {
    pathname: "/",
    icon: <RiYoutubeFill />,
  },
  {
    pathname: "/",
    icon: <RiLinkedinBoxFill />,
  },
  {
    pathname: "/",
    icon: <RiGithubFill />,
  },
  {
    pathname: "/",
    icon: <RiFacebookFill />,
  },
  {
    pathname: "/",
    icon: <RiInstallFill />,
  },
];

const SocialMedia = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialMedia.map((item, index) => (
        <Link
          className={`transition-all hover:text-primary ${iconStyles}`}
          href={item.pathname}
          key={index}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
