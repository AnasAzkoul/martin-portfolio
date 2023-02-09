import React, {useRef, useEffect} from 'react';
import styles from './navbar.module.css'; 
import NavLinks from './NavLinks';
import {AiOutlineClose} from 'react-icons/ai'; 




type Props = {
  sidebar: boolean
  closeSidebar: () => void
}

const Sidebar = ({sidebar, closeSidebar}: Props) => {


  return (
    <div
      className={`${styles.sidebar} ${
        sidebar ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className='py-20 px-8 flex justify-end w-full'>
        <button onClick={closeSidebar}>
          <AiOutlineClose />
        </button>
      </div>
      <NavLinks type='mobile' />
    </div>
  );
}

export default Sidebar
