import * as React from 'react';
import { Box } from 'theme-ui';
import OverlayProps, { ColorsProps } from '@exoTheme/components/Overlay/types';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });

const Overlay: React.FC<OverlayProps> = ({
  children,
  visible,
  zIndex,
  position,
  colors,
  color,
  transitionDuration,
  animated,
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

  // for (let i = 0; i < colors.length; i++) {
  //   const item = colors[i];
  //   if (Array.isArray(item)) {
  //     if (!directions[i]) adjustedDirections.push(directions[0])
  //     bgImage.push(`linear-gradient(${directions[0] || directions[i - 1]}, ${item?.join(', ')})`)
  //   } else {
  //     bgImage.push(`linear-gradient(${directions}, ${colors?.join(', ')})`)
  //   }
  // }

  return visible ? (
    <Box
      {...props}
      aria-hidden="true"
      sx={{
        animation: animated
          ? `${fadeIn} ${transitionDuration || '1000'}ms`
          : 'none',
        transition: animated ? `all ${transitionDuration || '1000'}ms` : 'none',
        backgroundColor: !colors?.length && (color || 'grey'),
        backgroundImage: bgImage,
        position: position,
        inset: 0,
        zIndex: zIndex
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
  animated: false
};
