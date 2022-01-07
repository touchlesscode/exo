import * as React from 'react';
import { Box } from 'theme-ui';
import { CardProps } from '@exoTheme/components/Card/types';
import Overlay from '@exoTheme/components/Overlay';
import Spinner from '@exoTheme/components/Spinner';

const Card: React.ForwardRefRenderFunction<
  HTMLDivElement,
  React.PropsWithChildren<CardProps>
> = (
  {
    children,
    radius,
    elevated,
    overlayed,
    overlay,
    loading,
    bordered,
    hover,
    ...restProps
  },
  ref
) => {
  return !loading ? (
    <Box
      {...restProps}
      ref={ref}
      sx={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        transform: 'translateZ(0)',
        position: 'relative',
        boxShadow: elevated ? 4 : 0,
        borderRadius: radius || 0,
        border: bordered && '1px solid #C7C7C7',
        ...(hover && {
          '&:hover': {
            boxShadow: elevated && hover ? 9 : 0
          }
        })
      }}
    >
      {overlayed ? <Overlay {...overlay} zIndex="1" /> : null}
      {children}
    </Box>
  ) : (
    <Spinner />
  );
};

export default React.forwardRef(Card);
