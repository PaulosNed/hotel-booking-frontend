"use client";

import Image from "next/image";
import React, { useState } from "react";
import A2SVLogo from "../../public/images/A2SV.svg";
import { LinkItems } from "./LinkItems";
import Link from "next/link";

interface NavItems {
  link: string;
  name: string;
}

export const NavBar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const navItems: NavItems[] = [
    {
      link: "/",
      name: "home",
    },
    {
      link: "/about",
      name: "about us",
    },
    {
      link: "/rooms",
      name: "Our Rooms",
    },
    {
      link: "/reservation",
      name: "reservation",
    },
    {
      link: "/contact",
      name: "Contact Us",
    }
  ];

  return (
    <div className="w-full py-6 px-12 bg-white z-40 shadow-lg fixed">
      {/* Desktop view */}
      <div className="hidden md:flex justify-between items-center font-montserrat">
        {/* logo section */}
        <div>
          <Image src="/images/logo.jpg" alt="A2SV logo" width={120} height={50} />
        </div>

        {/* Navigation section */}
        <div className="flex gap-6">
          {navItems.map((nav: NavItems) => (
            <LinkItems key={nav.name} name={nav.name} link={nav.link} />
          ))}
        </div>

        {/* login signup section */}
        {/* <div className="flex gap-2">
          <Link href={'/signin'} className="btn">Login</Link>
          <button className="btn bg-primary text-white">Donate</button>
        </div> */}
      </div>

      {/* Mobile view */}
      <div className="flex md:hidden justify-between font-montserrat">
        {/* logo section */}
        <div>
          <Image src={A2SVLogo} alt="A2SV logo" width={120} height={50} />
        </div>

        <div className="flex flex-col items-end relative">
          <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <Image src={"./images/burger.svg"} alt="" width={40} height={40} />
          </button>

          {/* Navigation section */}
          {isMenuToggled && (
            <div className="flex flex-col w-36 items-center space-y-1 absolute top-10 right-0 bg-blue-100 shadow-lg">
              {navItems.map((nav: NavItems) => (
                <LinkItems key={nav.name} name={nav.name} link={nav.link} />
              ))}
              <button className="btn">Login</button>
              <button className="btn">Donate</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
