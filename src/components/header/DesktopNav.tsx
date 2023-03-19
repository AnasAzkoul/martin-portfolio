import React, { useContext } from "react";
import Link from "next/link";
import { navLinks } from "@/utils/constants";

const DesktopNav = () => {
  return (
    <nav className="hidden md:block">
      <ul
        className="flex justify-between w-full text-base capitalize md:py-2 bg-secondaryLight font-montserrat text-primary"
        id="primary-navigation"
      >
        {navLinks.map((item) => {
          return (
            <li
              key={item.id}
              className="relative z-10 flex-1 cursor-pointer md:text-center nav-link-hover"
            >
              <Link
                href={item.url}
                scroll={false}
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

export default DesktopNav;
