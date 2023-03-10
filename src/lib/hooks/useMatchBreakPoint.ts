import {useState, useEffect} from 'react';

export const useMatchBreakPoint = () => {
  const [matchBreakPoint, setMatchBreakPoint] = useState(false); 
  
  useEffect(() => {
    const matches = window.matchMedia('(min-width: 768px)').matches;
    setMatchBreakPoint(matches)
  }, [])
  
  
  return matchBreakPoint; 
}
