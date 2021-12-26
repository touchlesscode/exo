import * as React from 'react';
import { Box } from 'theme-ui';
import OverlayProps from '@exoTheme/components/Overlay/types';

const Overlay: React.FC<OverlayProps> = ({
  visible,
  zIndex,
  position,
  image,
  color
}) => {
  return visible ? (
    <Box
      aria-hidden="true"
      sx={{
        backgroundColor: color,
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
