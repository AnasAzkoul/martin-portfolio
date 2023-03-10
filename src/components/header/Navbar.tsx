import React, {useContext} from 'react'; 
import { uiContext } from '@/context/UIContext';
import Link from 'next/link';
import Logo from './Logo';
import PrimaryNavigation from './PrimaryNavigation';
import {navLinks} from '@/utils/constants';
import {AiOutlineClose} from 'react-icons/ai'; 
import { RxHamburgerMenu } from 'react-icons/rx'; 

const Navbar = () => {
  const {closeSidebar, isSidebarOpen, toggleSidebar} = useContext(uiContext); 

  
  return (
    <header className='fixed w-full top-0 left-0 bg-primary md:bg-secondaryLight z-50'>
      <div className='max-w-7xl xl:max-w-screen-2xl xl:px-20 z-50 px-6 py-4 md:py-0 mx-auto flex items-center justify-between'>
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

        <PrimaryNavigation />
      </div>
    </header>
  );
}


export default Navbar
