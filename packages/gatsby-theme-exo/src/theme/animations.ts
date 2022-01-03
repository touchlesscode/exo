import { keyframes } from '@emotion/react';

export const slideUp = keyframes({
  from: { marginTop: '50%', opacity: 0 },
  to: { marginTop: 0, opacity: 1 }
});

export const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });
