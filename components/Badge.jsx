"use client";

import React from "react";

import CountUp from "react-countup/";

export default function Badge({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}) {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-2xl text-primary">{icon}</div>
      <div className="flex items-center text-4xl font-bold text-primary">
        <CountUp end={endCountNum} delay={1} duration={4} />
        {endCountText}
      </div>
      <div className="max-w-[85px] font-medium text-black leading-none">
        {badgeText}
      </div>
    </div>
  );
}
