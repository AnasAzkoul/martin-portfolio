import { useContext } from 'react';
import { uiContext } from '@/context/UIContext';
import Link from 'next/link';
import { navLinks } from '../../utils/constants';
import styles from './navbar.module.css';

type Props = {
  type?: 'mobile';
};

const NavLinks = ({ type }: Props) => {
  const { closeSidebar } = useContext(uiContext);

  return (
    <ul
      className={`${styles.links} ${type === 'mobile' && styles.links_mobile}`}
    >
      {navLinks.map((link,index) => {
        return (
          <li onClick={closeSidebar} className='relative' key={link.id}>
            <Link href={link.url} className={`${styles.link} animate-fadeFromLeft`}>
              {link.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
