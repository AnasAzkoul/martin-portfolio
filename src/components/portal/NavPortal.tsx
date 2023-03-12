import React, {useContext} from 'react';
import Portal from '.';
import { uiContext } from '@/context/UIContext';

interface Props {
}


const NavigationPortal = ({}: Props) => {
  const {isSidebarOpen} = useContext(uiContext); 

  return (
    <>    
      {isSidebarOpen && (        
        <Portal wrapperID='react-portal-modal-navigation'>
          <div className='fixed inset-0 z-30 bg-gray-500/50'>
          </div>
        </Portal>
        )}
    </>
  );
};

export default NavigationPortal;
