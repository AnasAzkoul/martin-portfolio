import {useState, useEffect} from 'react'

export const useResizeWindow = () => {
  const [width, setWidth] = useState(900);
  const [height, setHeight] = useState(636);
  
    const onResizeWindow = () => {
      setWidth((prev) => {
        if (window.innerWidth > 900) {
          return 900;
        } else {
          return window.innerWidth;
        }
      });

      setHeight((prev) => {
        if (window.innerHeight > 636) {
          return 636;
        } else {
          return window.innerHeight;
        }
      });
    };
  
  useEffect(() => {
    window.addEventListener('resize', onResizeWindow); 
    
    return window.removeEventListener('resize', onResizeWindow); 
  }, [width, height])
  
  return {
    width, 
    height
  }
}
