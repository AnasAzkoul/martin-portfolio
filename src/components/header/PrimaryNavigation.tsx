import React, { useContext } from 'react';
import Link from 'next/link';
import { uiContext } from '@/context/UIContext';
import { navLinks } from '@/utils/constants';



const PrimaryNavigation = () => {
  const {isSidebarOpen, closeSidebar} = useContext(uiContext);

  return (
    <nav
      className={`primary-navigation-container 
          ${
            isSidebarOpen
              ? 'translate-x-0'
              : 'translate-x-full md:translate-x-0'
          }`}
    >
      <ul className='primary-navigation' id='primary-navigation'>
        {navLinks.map((item) => {
          return (
            <li
              key={item.id}
              className='md:py-6 md:px-4 py-6 w-full md:text-center cursor-pointer relative nav-link-hover'
              onClick={closeSidebar}
            >
              <Link href={item.url} className='font-semibold md:text-primary'>
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default PrimaryNavigation;
