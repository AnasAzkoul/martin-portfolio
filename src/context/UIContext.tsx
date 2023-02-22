import React, {useState, createContext} from 'react'; 

type Props = {
  children: React.ReactNode
}

const initialVale = {
  isSidebarOpen: false,
  openSidebar: () => {}, 
  closeSidebar: () => {}, 
};

export const uiContext = createContext(initialVale); 

const UiProvider = ({children}: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
    
  const openSidebar = () => {
    setIsSidebarOpen(true); 
    console.log(isSidebarOpen)
  }
  
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  
  const value = {
    isSidebarOpen, 
    openSidebar, 
    closeSidebar
  }
  
  return (
    <uiContext.Provider value={value}>{children}</uiContext.Provider>  
  )
}

export default UiProvider; 
