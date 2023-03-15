import React, {useContext} from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { uiContext } from '@/context/UIContext';
import { navLinks } from '@/utils/constants';

type Props = {}

const MobileNav = (props: Props) => {
  const {isSidebarOpen, closeSidebar} = useContext(uiContext);

    const navbarStyles = clsx(
      'bg-secondary/80 backdrop-blur-sm fixed top-0 right-0 h-full w-3/5 sm:w-2/5 transition-transform duration-150 z-40 ease-in md:hidden',
      {
        'translate-x-0': isSidebarOpen === true,
        'translate-x-full md:translate-x-0': isSidebarOpen === false,
      }
    );


  return (
    <nav className={navbarStyles}>
      <ul
        className='pl-6 py-16 capitalize font-montserrat text-base text-primary'
        id='primary-navigation'
      >
        {navLinks.map((item) => {
          return (
            <li
              key={item.id}
              className='flex-1 md:text-center cursor-pointer nav-link-hover relative z-10'
              onClick={closeSidebar}
            >
              <Link
                href={item.url}
                className='font-semibold md:text-primary text-sm block md:py-3 md:px-6 py-6 w-full z-10'
              >
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default MobileNav
