import { useEffect, useRef, useState } from 'react';

const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Une fois visible, on peut arrêter d'observer
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: threshold, rootMargin: "0px 0px -100px 0px" }
    );
    
    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }
    
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [threshold]);
  
  return [domRef, isVisible];
};

export default useScrollAnimation;