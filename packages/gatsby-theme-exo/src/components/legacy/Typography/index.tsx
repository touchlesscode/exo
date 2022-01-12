import * as React from 'react';
import { Text, Box } from 'theme-ui';
import Divider from '@exoTheme/components/legacy/Divider';
import TypographyPropsTypes from '@exoTheme/components/legacy/Typography/types';

const Typography: React.FC<TypographyPropsTypes> = (props) => {
  const { children, withLine, line, sx, as = 'p', ...rest } = props;
  const { variant, color, align, justify, width, height, space } = line || {};

  return (
    <Box
      sx={{
        width: withLine ? 'max-content' : '100%',
        display: withLine ? 'flex' : 'inline-block',
        gap: space,
        flexDirection: withLine && align === 'top' ? 'column' : 'column-reverse'
      }}
    >
      <Divider
        visible={withLine}
        variant={variant}
        justify={justify}
        width={width}
        height={height}
        color={color}
      />
      <Text
        {...rest}
        as={as}
        sx={{
          m: 0,
          ...sx
        }}
      >
        {children}
      </Text>
    </Box>
  );
};

export default Typography;

Typography.defaultProps = {
  withLine: false,
  line: {
    align: 'bottom',
    justify: 'left',
    width: '70%',
    height: '4px',
    space: '6px'
  }
};
