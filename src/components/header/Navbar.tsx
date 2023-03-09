import React, {useContext} from 'react'; 
import { uiContext } from '@/context/UIContext';
import Link from 'next/link';
import Logo from './Logo';
import {navLinks} from '@/utils/constants';
import {AiOutlineClose} from 'react-icons/ai'; 
import { RxHamburgerMenu } from 'react-icons/rx'; 

const Navbar = () => {
  const {closeSidebar, isSidebarOpen, toggleSidebar} = useContext(uiContext); 

  
  return (
    <header className='fixed w-full top-0 left-0 bg-primary md:bg-secondaryLight'>
      <div className='max-w-7xl xl:max-w-screen-2xl xl:px-20  mx-auto flex items-center justify-between p-6 z-50'>
        <div>
          <Logo />
        </div>

        <button
          aria-controls='primary-navigation'
          aria-expanded='false'
          className={`${
            !isSidebarOpen ? 'mobile-nav-closed' : ''
            } mobile-nav-toggle`}
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
        </button>

        <nav
          className={`primary-navigation-container 
          ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}
        >
          <ul className='primary-navigation' id='primary-navigation'>
            {navLinks.map((item) => {
              return (
                <li
                  key={item.id}
                  className='md:py-2 md:px-4 py-6 w-full md:text-center cursor-pointer relative nav-link-hover'
                  onClick={closeSidebar}
                >
                  <Link
                    href={item.url}
                    className='font-semibold md:text-primary'
                  >
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}


export default Navbar
