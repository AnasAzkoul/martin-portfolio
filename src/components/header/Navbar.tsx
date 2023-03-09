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
    <header className='fixed w-full top-0 left-0 bg-primary'>
      <div className='max-w-7xl xl:max-w-full xl:px-20 mx-auto flex items-center justify-between p-6 z-50'>
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
                  className='py-4 relative'
                  onClick={closeSidebar}
                >
                  <Link href={item.url} className='nav-link-hover'>
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
