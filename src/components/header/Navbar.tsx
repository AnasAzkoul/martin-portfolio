import React from 'react'; 
import Link from 'next/link';
import {navLinks} from '../../utils/constants'; 
import styles from './navbar.module.css'; 

const Navbar = () => {
  return (
    <header>
      <nav className={styles.navigation}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href='/'>
              MD.
            </Link>
          </div>
          <ul className={styles.links}>
            {navLinks.map(link => {
              return (
                <li key={link.id}>
                  <Link href={link.url}>{link.text}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
