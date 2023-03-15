import React, { useContext } from 'react';
import { uiContext } from '@/context/UIContext';
import Logo from './Logo';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { AiOutlineClose } from 'react-icons/ai';
import {RxHamburgerMenu} from 'react-icons/rx';
import clsx from 'clsx';

const Navbar = () => {
  const {isSidebarOpen, toggleSidebar} = useContext(uiContext);

  const overlayStyles = clsx('', {
    'z-30 bg-primary/50 fixed inset-0 backdrop-blur-sm': isSidebarOpen,
  })

  return (
    <>
      <header className='fixed w-full top-0 left-0 bg-primary md:bg-secondaryLight z-50'>
        <div className='max-w-7xl xl:max-w-screen-2xl xl:px-20 px-6 py-4 md:py-0 mx-auto flex items-center justify-between'>
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

          <DesktopNav />
          <MobileNav />
        </div>
      </header>
      <div id='overlay-navigation' className={overlayStyles} onClick={toggleSidebar}></div>
    </>
  );
};

export default Navbar;
