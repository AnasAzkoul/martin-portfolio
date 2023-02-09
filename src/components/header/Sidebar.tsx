import React, {useContext} from 'react';
import {uiContext} from '@/context/UIContext';
import Logo from './Logo';
import NavLinks from './NavLinks';
import {AiOutlineClose} from 'react-icons/ai'; 
import styles from './navbar.module.css'; 

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
      <div className='py-20 px-10 flex justify-between w-full'>
        <Logo />
        <button onClick={closeSidebar}>
          <AiOutlineClose size={20}/>
        </button>
      </div>
      <NavLinks type='mobile' />
    </div>
  );
}

export default Sidebar
