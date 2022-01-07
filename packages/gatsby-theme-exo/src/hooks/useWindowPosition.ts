import { useState, useEffect } from 'react';
import useEventListener from '@exoTheme/hooks/useEventListener';

const useWindowPosition = (track = true) => {
  const [scrollPosition, setPosition] = useState(0);
  const updatePosition = () => {
    if (typeof window === 'undefined') return;
    setPosition(window.pageYOffset);
  };
  useEffect(() => {
    updatePosition();
  }, []);
  useEventListener('scroll', updatePosition, undefined, track);
  return scrollPosition;
};
export default useWindowPosition;
