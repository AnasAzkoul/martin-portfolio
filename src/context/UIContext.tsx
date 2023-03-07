import React, {useState, createContext} from 'react'; 

type Props = {
  children: React.ReactNode
}

const initialVale = {
  isSidebarOpen: false,
  openSidebar: () => {}, 
  closeSidebar: () => {}, 
  isPortalOpen: false, 
  openPortal: () => {}, 
  closePortal: () => {}, 
};

export const uiContext = createContext(initialVale); 

const UiProvider = ({children}: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const [isPortalOpen, setIsPortalOpen] = useState(false); 
    
  const openSidebar = () => {
    setIsSidebarOpen(true); 
    console.log(isSidebarOpen)
  }
  
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  
  const openPortal = () => {
    setIsPortalOpen(true); 
  }
  
  const closePortal = () => {
    setIsPortalOpen(false)
  }
  
  const value = {
    isSidebarOpen, 
    openSidebar, 
    closeSidebar, 
    isPortalOpen, 
    openPortal, 
    closePortal
  }
  
  return (
    <uiContext.Provider value={value}>{children}</uiContext.Provider>  
  )
}

export default UiProvider; 
