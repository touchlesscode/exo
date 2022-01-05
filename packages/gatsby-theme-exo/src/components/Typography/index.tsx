import * as React from 'react';
import { Text, TextProps } from 'theme-ui';

const Typography: React.FC<TextProps> = (props) => {
  const { children, sx, as = 'p', ...rest } = props;

  return (
    <Text
      {...rest}
      color="inherit"
      as={as}
      sx={{
        m: 0,
        ...sx
      }}
    >
      {children}
    </Text>
  );
};

export default Typography;
