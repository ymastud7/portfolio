import { useState, useEffect } from 'react';

const useScrollVisibility = (elementId: string, threshold = 0.75, animateOnce = true) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(elementId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const inView = rect.top <= window.innerHeight * threshold;
        
        if (inView && !isVisible) {
          setIsVisible(true);
        } else if (!inView && !animateOnce && isVisible) {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [elementId, threshold, animateOnce, isVisible]);

  return isVisible;
};

export default useScrollVisibility;
