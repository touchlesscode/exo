import { useState } from 'react';
import useEventListener from '@exoTheme/hooks/useEventListener';

const useKeyPress = <T extends HTMLElement>(
  targetKeys: [string, string],
  ref?: React.RefObject<T>
) => {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);
  // If pressed key is our target key then set to true
  function downHandler(e: KeyboardEvent | Event): void {
    if (targetKeys.includes((e as KeyboardEvent)?.key)) {
      setKeyPressed(true);
    }
  }
  // If released key is our target key then set to false
  const upHandler = (e: KeyboardEvent | Event): void => {
    if (targetKeys.includes((e as KeyboardEvent)?.key)) {
      setKeyPressed(false);
    }
  };

  useEventListener('keydown', downHandler, ref);
  useEventListener('keyup', upHandler, ref);
  return keyPressed;
};

export default useKeyPress;
