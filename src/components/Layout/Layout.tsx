import React from 'react'; 
import Navbar from '../header/Navbar';
import Sidebar from '../header/Sidebar';

type Props = {
  children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <>
      <Sidebar />
      <Navbar />
      {children}
    </>
  )
}

export default Layout
