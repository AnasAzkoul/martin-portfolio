import React, {useState, createContext} from 'react'; 

type Props = {
  children: React.ReactNode
}

const initialVale = {
  isSidebarOpen: false,
  toggleSidebar: () => {}, 
  openSidebar: () => {}, 
  closeSidebar: () => {}, 
};

export const uiContext = createContext(initialVale); 

const UiProvider = ({children}: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); 
  }
    
  const openSidebar = () => {
    setIsSidebarOpen(true); 
  }
  
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  
  
  const value = {
    isSidebarOpen, 
    toggleSidebar, 
    openSidebar, 
    closeSidebar, 
  }
  
  return (
    <uiContext.Provider value={value}>{children}</uiContext.Provider>  
  )
}

export default UiProvider; 
