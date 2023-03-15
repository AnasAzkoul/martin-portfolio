import React, { useContext } from 'react';
import Link from 'next/link';
import { navLinks } from '@/utils/constants';

const DesktopNav = () => {
  return (
    <nav className='hidden md:block'>
      <ul
        className='flex justify-between md:py-2 bg-secondaryLight w-full capitalize font-montserrat text-base text-primary'
        id='primary-navigation'
      >
        {navLinks.map((item) => {
          return (
            <li
              key={item.id}
              className='flex-1 md:text-center cursor-pointer nav-link-hover relative z-10'
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
};

export default DesktopNav;
