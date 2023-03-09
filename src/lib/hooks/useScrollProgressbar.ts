import { useEffect, useRef } from 'react';

const updateProgressBar = (div: HTMLDivElement) => {  
  const {scrollTop, scrollHeight} = document.documentElement; 
  
  const scrollRatio = `${(scrollTop / (scrollHeight - window.innerHeight)) * 100}%`
  
  div.style.setProperty('--progress', scrollRatio); 
};

export const useScrollProgressBar = () => {
  const progressRef = useRef<HTMLDivElement>(null); 
  
  useEffect(() => {
    const progressDiv = progressRef.current; 
    
    document.addEventListener('scroll', () => updateProgressBar(progressDiv!)); 
    
    return document.removeEventListener('scroll', () => updateProgressBar(progressDiv!))
  }, [])
  
  return progressRef; 
}
