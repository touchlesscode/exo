import * as React from 'react';
import { Box } from 'theme-ui';
import OverlayProps, { ColorsProps } from '@exoTheme/components/Overlay/types';
import { fadeIn } from '@exoTheme/theme/animations';

const Overlay: React.FC<OverlayProps> = ({
  children,
  visible,
  zIndex,
  width,
  height,
  position,
  colors,
  color,
  transitionDuration,
  animated,
  transitioned,
  sx,
  ...props
}) => {
  const bgImage = colors?.map((color: ColorsProps) =>
    color.linear
      ? `linear-gradient(${
          color.direction ? `${color.direction},` : ''
        } ${color.linear?.join(', ')})`
      : `radial-gradient(${
          color.direction ? `${color.direction},` : ''
        } ${color.radial?.join(', ')})`
  );

  return visible ? (
    <Box
      {...props}
      aria-hidden="true"
      sx={{
        animation: animated
          ? `${fadeIn} ${transitionDuration || '1000'}ms`
          : 'none',
        transition: transitioned
          ? `all ${transitionDuration || '1000'}ms`
          : 'none',
        backgroundColor: !colors?.length && (color || 'grey'),
        backgroundImage: bgImage,
        position: position,
        inset: 0,
        zIndex: zIndex,
        width,
        maxHeight: height,
        ...sx
      }}
    >
      {children}
    </Box>
  ) : null;
};

export default Overlay;

Overlay.defaultProps = {
  visible: true,
  zIndex: 'infinity',
  position: 'absolute',
  animated: false,
  width: '100%',
  height: '100%'
};
