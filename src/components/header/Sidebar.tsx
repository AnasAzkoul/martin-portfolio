import React, {useContext} from 'react';
import { uiContext } from '@/context/UIContext';
import styles from './navbar.module.css'; 
import NavLinks from './NavLinks';
import {AiOutlineClose} from 'react-icons/ai'; 

type Props = {

}

const Sidebar = ({}: Props) => {
  const {isSidebarOpen, closeSidebar} = useContext(uiContext); 

  return (
    <div
      className={`${styles.sidebar} ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
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
