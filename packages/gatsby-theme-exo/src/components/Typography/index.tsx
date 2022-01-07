import * as React from 'react';
import { Text, TextProps } from 'theme-ui';

const Typography: React.FC<TextProps> = (props) => {
  const { children, sx, as = 'p', ...rest } = props;

  return (
    <Text
      color="inherit"
      as={as}
      {...rest}
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
