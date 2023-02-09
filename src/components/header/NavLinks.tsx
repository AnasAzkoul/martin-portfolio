import React from 'react'; 
import Link from 'next/link';
import { navLinks } from '../../utils/constants'; 
import styles from './navbar.module.css'; 

type Props = {
  type?: 'mobile'
}

const NavLinks = ({type}: Props) => {
  return (
    <ul
      className={`${styles.links} ${type === 'mobile' && styles.links_mobile}`}
    >
      {navLinks.map((link) => {
        return (
          <li key={link.id}>
            <Link href={link.url}>{link.text}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavLinks