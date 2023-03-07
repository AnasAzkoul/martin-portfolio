import React, {useState, useEffect} from 'react'; 
import {createPortal} from 'react-dom'; 

const createWrapperAndAppendToBody = (wrapperID: string) => {
  if (!document) return; 
  const wrapperElement = document.createElement('div'); 
  wrapperElement.setAttribute('id', wrapperID); 
  wrapperElement.className = 'portal'
  document.body.appendChild(wrapperElement); 
  return wrapperElement; 
}

type Props = {
  children: React.ReactElement; 
  wrapperID: string
}

const Portal = ({children, wrapperID}: Props) => {
  
  const [wrapperElement, setWrapperElement] = useState<HTMLElement>(); 
  
  useEffect(() => {
    let element = document.getElementById(wrapperID) as HTMLDivElement | undefined; 
    let systemCreated = false; 
    
    if(!element) {
      systemCreated = true; 
      element = createWrapperAndAppendToBody(wrapperID); 
    }
    setWrapperElement(element); 
    
    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element); 
      }
    }
  }, [wrapperID])
  
  if (!wrapperElement) return null; 
  
  return createPortal(children, wrapperElement); 
}

export default Portal
