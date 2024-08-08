
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {

  const currentPath = usePathname();
  const navItems = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Projects",
      link: "/projects",
    },
    {
      text: "Contact",
      link: "/contact",
    },
    {
      text: "About",
      link: "/about",
    },

  ]
  return (
    <header className={`fixed ${currentPath == '/contact'|| currentPath.includes("project") || currentPath.endsWith("about")? 'top-16' : 'top-[85%]'}  w-full flex justify-center z-20 px-5`}>

      <nav className="max-w-6xl mx-auto bg-first-medium py-6 px-16 rounded-xl box-normal-shadow backdrop-blur-lg bg-transparent mobile-md:w-full mobile-md:py-[5vw] mobile-md:px-[1vw] ">
        <ul className="font-bold text-xl flex flex-row flex-nowrap gap-16 mobile-md:text-[4vw] mobile-md:justify-center mobile-md:gap-[7.2vw]">

          {
            navItems.map((item) => (
              <li key={item.link} className={`${currentPath == item.link && `text-second-medium ext-normal-shadow`} `}>
                <Link href={item.link}>{item.text.toUpperCase()}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
