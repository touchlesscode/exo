import useEventListener from '@exo/hooks/useEventListener';
import * as React from 'react';

const useTrapFocusInsideRef = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  shouldTrap = true,
  selectors?: string
) => {
  const focusableEls = ref.current?.querySelectorAll(
    selectors ||
      `
      button,
      a[href]:not([disabled]),
      button:not([disabled]),
      textarea:not([disabled]),
      input[type="text"]:not([disabled]),
      input[type="radio"]:not([disabled]),
      input[type="checkbox"]:not([disabled]),
      select:not([disabled])
    `
  );
  const firstFocusableEl = focusableEls?.[0] as HTMLElement;
  const lastFocusableEl = focusableEls?.[
    focusableEls.length - 1
  ] as HTMLElement;

  const handleFocus = (e: Event) => {
    const el = e as KeyboardEvent;

    if (el.key !== 'Tab' || !ref.current) return;

    // Shift + Tab and current focused element is the first focusable element
    if (
      (el.shiftKey && document.activeElement === firstFocusableEl) ||
      document.activeElement === ref.current
    ) {
      lastFocusableEl?.focus(); // Go to the first focusable element
      e.preventDefault();
      return; // return so we don't run the rest of the func
    }
    // Tab and current focused element is the last focusable element
    if (document.activeElement === lastFocusableEl) {
      firstFocusableEl?.focus(); // Go back to the first focusable element
      e.preventDefault();
    }
  };

  React.useEffect(() => {
    if (!shouldTrap) return;
    (firstFocusableEl as HTMLElement)?.focus(); // focus the first element in the list.

    return () => {
      (ref.current as HTMLElement)?.focus(); // focus the ref on unmount
    };
  }, [shouldTrap]);

  useEventListener('keydown', handleFocus, ref, shouldTrap);
};

export default useTrapFocusInsideRef;
