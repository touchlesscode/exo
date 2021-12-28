import * as React from 'react';
import { Box } from 'theme-ui';
import OverlayProps from '@exoTheme/components/Overlay/types';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });

const Overlay: React.FC<OverlayProps> = ({
  visible,
  zIndex,
  position,
  image,
  color,
  transitionDuration,
  animated = true,
  ...props
}) => {
  return visible ? (
    <Box
      {...props}
      aria-hidden="true"
      sx={{
        animation: animated
          ? `${fadeIn} ${transitionDuration || '500'}ms`
          : 'none',
        backgroundColor: !image && (color || 'grey'),
        backgroundImage: image,
        position: position,
        inset: 0,
        zIndex: zIndex
      }}
    />
  ) : null;
};

export default Overlay;

Overlay.defaultProps = {
  visible: true,
  zIndex: 'infinity',
  position: 'absolute'
};
