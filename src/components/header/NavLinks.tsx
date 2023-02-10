import React from 'react'; 
import {useContext} from 'react';
import { uiContext } from '@/context/UIContext';
import Link from 'next/link';
import { navLinks } from '../../utils/constants'; 
import styles from './navbar.module.css'; 

type Props = {
  type?: 'mobile'
}

const NavLinks = ({type}: Props) => {
  const {closeSidebar} = useContext(uiContext); 
  return (
    <ul
      className={`${styles.links} ${type === 'mobile' && styles.links_mobile}`}
    >
      {navLinks.map((link) => {
        return (
          <li key={link.id} onClick={closeSidebar}>
            <Link href={link.url} className='w-full'>{link.text}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavLinks
