import { useEffect, useLayoutEffect, useState } from 'react';
import useLocalStorage from '@exoTheme/hooks/useLocalStorage';

type ReturnType = [boolean, (locked: boolean) => void];

function useLockedBody(initialLocked = false): ReturnType {
  const [locked, setLocked] = useState(initialLocked);
  const [, setBodyLocked] = useLocalStorage('bodyLocked', true);

  // Do the side effect before render
  useLayoutEffect(() => {
    if (!locked || typeof window === 'undefined') {
      setBodyLocked(false);
      return;
    }

    // Save initial body style
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Get the scrollBar width
    const root = document.getElementById('___gatsby'); // or root
    const scrollBarWidth = root
      ? window.innerWidth - root.scrollWidth ||
        root.offsetWidth - root.scrollWidth
      : 0;

    // Lock body scroll
    document.body.style.overflow = 'hidden';

    // Avoid width reflow
    if (scrollBarWidth) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }
    setBodyLocked(true);

    return () => {
      document.body.style.overflow = originalOverflow;
      setBodyLocked(false);
      if (scrollBarWidth) {
        document.body.style.paddingRight = originalPaddingRight;
      }
    };
  }, [locked]);

  // Update state if initialValue changes
  useEffect(() => {
    if (locked !== initialLocked) {
      setLocked(initialLocked);
      setBodyLocked(locked);
    }
  }, [initialLocked]);

  return [locked, setLocked];
}

export default useLockedBody;
