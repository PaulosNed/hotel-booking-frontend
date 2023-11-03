"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  name: string;
  link: string;
}

export const LinkItems: React.FC<Props> = ({ name, link }) => {
  const pathname = usePathname();
  const isCurrentRoute = pathname === link;

  return (
    <Link
      className={`group ${
        isCurrentRoute
          ? "cursor-pointer font-bold"
          : "hover:cursor-pointer font-semibold"
      }`}
      href={link}
    >
      <div
        className={`text-sm capitalize ${
          isCurrentRoute ? "text-primary" : "group-hover:text-primary"
        }`}
      >
        {name}
      </div>
      <div
        className={`h-1 mt-1 mx-0.5 rounded-full bg-primary opacity-0 ${
          isCurrentRoute ? "md:opacity-100" : "group-hover:md:opacity-100"
        } transition-opacity`}
      ></div>
    </Link>
  );
};
