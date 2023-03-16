import React, { useContext } from "react";
import Link from "next/link";
import clsx from "clsx";
import { uiContext } from "@/context/UIContext";
import { navLinks } from "@/utils/constants";

type Props = {};

const MobileNav = (props: Props) => {
  const { isSidebarOpen, closeSidebar } = useContext(uiContext);

  const navbarStyles = clsx(
    "bg-secondary/80 backdrop-blur-sm fixed top-0 right-0 h-full w-3/5 sm:w-2/5 transition-transform duration-150 z-40 ease-in md:hidden",
    {
      "translate-x-0": isSidebarOpen === true,
      "translate-x-full md:translate-x-0": isSidebarOpen === false,
    }
  );

  return (
    <nav className={navbarStyles}>
      <ul
        className="py-16 pl-6 text-base capitalize font-montserrat text-primary"
        id="primary-navigation"
      >
        {navLinks.map((item) => {
          return (
            <li
              key={item.id}
              className="relative z-10 flex-1 cursor-pointer md:text-center nav-link-hover"
              onClick={closeSidebar}
            >
              <Link
                href={item.url}
                className="z-10 block w-full py-6 text-sm font-semibold md:text-primary md:py-3 md:px-6"
              >
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileNav;
