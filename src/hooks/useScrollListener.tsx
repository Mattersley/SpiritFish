import { useEffect, useRef, useState } from 'react';

// eslint-disable-next-line no-unused-vars
const useScrollListener = () => {
  const prevScrollY = useRef(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
      setScrollPosition(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [goingUp]);

  return [scrollPosition, goingUp];
};

export default useScrollListener;
