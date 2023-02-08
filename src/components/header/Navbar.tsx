import React from 'react'; 
import Link from 'next/link';
import {navLinks} from '../../utils/constants'; 
import { RxHamburgerMenu } from 'react-icons/rx'; 
import styles from './navbar.module.css'; 

const Navbar = () => {
  return (
    <header>
      <nav className={styles.navigation}>
        <div className={styles.container}>
          <div className={`${styles.logo} animate-fadeFromLeft`}>
            <Link href='/'>MD.</Link>
          </div>
          <ul className={styles.links}>
            {navLinks.map((link) => {
              return (
                <li key={link.id}>
                  <Link href={link.url}>{link.text}</Link>
                </li>
              );
            })}
          </ul>
          <button className='md:hidden'>
            <RxHamburgerMenu size={20}/>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar
