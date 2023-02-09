import React, {useContext} from 'react'; 
import { uiContext } from '@/context/UIContext';
import Link from 'next/link';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { RxHamburgerMenu } from 'react-icons/rx'; 
import styles from './navbar.module.css'; 

const Navbar = () => {
  const {openSidebar} = useContext(uiContext); 
  return (
    <header className='fixed w-full'>
      <nav className={styles.navigation}>
        <div className={styles.container}>
          <Logo />
          <NavLinks />
          <button className='md:hidden' onClick={openSidebar}>
            <RxHamburgerMenu size={20}/>
          </button>
        </div>
        
      </nav>
    </header>
  );
}

export default Navbar
