import { useCallback, useState } from 'react';

// Parameter is the boolean, with default "false" value
const useToggle = (initialState = false): [boolean, () => void] => {
  // Initialize the state
  const [state, setState] = useState<boolean>(initialState);

  // Define and memorize toggler function in case we pass down the component,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback((): void => setState((state) => !state), []);

  return [state, toggle];
};

export default useToggle;
