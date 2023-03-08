import React, {useState, createContext} from 'react'; 

type Props = {
  children: React.ReactNode
}

const initialVale = {
  isSidebarOpen: false,
  toggleSidebar: () => {}, 
  openSidebar: () => {}, 
  closeSidebar: () => {}, 
  // isPortalOpen: false, 
  // openPortal: () => {}, 
  // closePortal: () => {}, 
};

export const uiContext = createContext(initialVale); 

const UiProvider = ({children}: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  // const [isPortalOpen, setIsPortalOpen] = useState(false); 
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); 
  }
    
  const openSidebar = () => {
    setIsSidebarOpen(true); 
  }
  
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  
  // const openPortal = () => {
  //   setIsPortalOpen(true); 
  // }
  
  // const closePortal = () => {
  //   setIsPortalOpen(false)
  // }
  
  const value = {
    isSidebarOpen, 
    toggleSidebar, 
    openSidebar, 
    closeSidebar, 
    // isPortalOpen, 
    // openPortal, 
    // closePortal
  }
  
  return (
    <uiContext.Provider value={value}>{children}</uiContext.Provider>  
  )
}

export default UiProvider; 
