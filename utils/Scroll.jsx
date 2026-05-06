"use client"
import { useState, useEffect, useRef } from "react";

export function useInView(threshold = 0.5) {
  const ref = useRef(null);          
  const [inView, setInView] = useState(false); 

  useEffect(() => {
    const observer = new IntersectionObserver(  
      (entries) => {
        if (entries[0].isIntersecting) {        
          setInView(true);
          observer.disconnect();                
        }
      },
      { threshold }                             
    );
    if (ref.current) observer.observe(ref.current); 
    return () => observer.disconnect();         
  }, [threshold]);

  return [ref, inView];                        
}

export const moveToTop = () =>{
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}