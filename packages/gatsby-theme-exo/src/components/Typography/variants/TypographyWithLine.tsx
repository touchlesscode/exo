import * as React from 'react';

import DividerProps from '@exoTheme/components/Divider/types';
import { Box } from 'theme-ui';
import TypographyPropsTypes from '@exoTheme/components/Typography/types';
import Divider from '@exoTheme/components/Divider';
import Typography from '@exoTheme/components/Typography';

export interface TypographyLineProps
  extends Omit<DividerProps, 'color'>,
    TypographyPropsTypes {
  align?: 'top' | 'bottom';
  lineColor?: string;
}

const TypographyWithLine: React.FC<TypographyLineProps> = ({
  children,
  variant,
  lineColor,
  color,
  align,
  justify,
  width,
  height,
  space,
  ...props
}) => {
  return (
    <Box
      sx={{
        width: 'fit-content',
        display: 'flex',
        gap: space,
        flexDirection: align === 'top' ? 'column' : 'column-reverse',
        color
      }}
    >
      <Divider
        visible
        variant={variant}
        justify={justify}
        width={width}
        height={height}
        color={lineColor}
      />
      <Typography {...props}>{children}</Typography>
    </Box>
  );
};

export default TypographyWithLine;

TypographyWithLine.defaultProps = {
  color: 'inherit',
  align: 'top',
  justify: 'left',
  width: '70%',
  height: '1',
  space: '2'
};
