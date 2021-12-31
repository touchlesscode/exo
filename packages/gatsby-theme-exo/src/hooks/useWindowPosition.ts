import { useState, useEffect } from 'react';
import useEventListener from './useEventListener';

const useWindowPosition = (track = true) => {
  const [scrollPosition, setPosition] = useState(0);
  const updatePosition = () => {
    setPosition(window.pageYOffset);
  };
  useEffect(() => {
    updatePosition();
  }, []);
  useEventListener('scroll', updatePosition, undefined, track);
  return scrollPosition;
};
export default useWindowPosition;
