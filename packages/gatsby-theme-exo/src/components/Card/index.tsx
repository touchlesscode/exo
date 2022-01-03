import * as React from 'react';
import { Box } from 'theme-ui';
import { CardProps } from '@exoTheme/components/Card/types';
import Overlay from '@exoTheme/components/Overlay';
import Spinner from '@exoTheme/components/Spinner';

const Card: React.ForwardRefRenderFunction<
  HTMLDivElement,
  React.PropsWithChildren<CardProps>
> = ({ children, radius, elevated, overlayed, overlay, loading, bordered }) => {
  return !loading ? (
    <Box
      sx={{
        all: 'inherit',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: elevated ? 9 : 0,
        borderRadius: radius || 0,
        border: bordered && '1px solid #C7C7C7'
      }}
    >
      {overlayed ? <Overlay {...overlay} /> : null}
      {children}
    </Box>
  ) : (
    <Spinner />
  );
};

export default React.forwardRef(Card);
