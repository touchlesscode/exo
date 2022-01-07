import { useState, useEffect } from 'react';
import useEventListener from '@exoTheme/hooks/useEventListener';
import { BoundingClientRecType } from '@exoTheme/types/index';

export const initialBoundingClientRect: BoundingClientRecType = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0
};

const useBoundingClientRectRef = <T extends HTMLElement>(
  ref: React.RefObject<T>
): BoundingClientRecType => {
  const [rect, setReact] = useState<BoundingClientRecType>(
    initialBoundingClientRect
  );

  const set = () => {
    if (!ref.current) return setReact(initialBoundingClientRect);
    const element = ref.current;
    const updatedRect = element.getBoundingClientRect();
    setReact(updatedRect);
  };

  useEffect(() => {
    set();
  }, []);

  useEventListener('resize', set);

  return rect;
};

export default useBoundingClientRectRef;
