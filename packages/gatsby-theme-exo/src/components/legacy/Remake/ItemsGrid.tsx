import { keyframes } from '@emotion/react';
import * as React from 'react';
import { BoxProps, Grid } from 'theme-ui';

interface ItemsGridProps extends BoxProps {
  willUnmount?: boolean
}

const ItemsGrid: React.FC<ItemsGridProps> = ({ children, willUnmount, sx }) => (
  <Grid
    sx={{
      animation: willUnmount ? `${fadeOut} 200ms forwards` : 'none',
      gridTemplateColumns: ['1fr', null, null, 'repeat(3, 1fr)', 'repeat(4, 1fr)'],
      width: "100%",
      justifyContent: "center",
      gap: "1.25rem",
      '@media only screen and (max-width: 1024px)': {
        gridTemplateColumns: 'repeat(2, 1fr)'
      },
      '@media only screen and (max-width: 481px)': {
        gridTemplateColumns: '1fr'
      },
      ...sx
    }}
  >
    {children}
  </Grid>
)

export default ItemsGrid;

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 }
})