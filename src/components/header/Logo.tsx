import React, {useContext} from 'react'; 
import { uiContext } from '@/context/UIContext';
import styles from './navbar.module.css'; 
import Link from 'next/link';

type Props = {}

const Logo = (props: Props) => {
  const {closeSidebar} = useContext(uiContext); 
  return (
    <div className={`${styles.logo} animate-fadeFromLeft`}>
      <Link href='/' onClick={closeSidebar}>MD.</Link>
    </div>
  );
}

export default Logo
