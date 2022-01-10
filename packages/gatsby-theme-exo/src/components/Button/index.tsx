/** @jsx jsx */
import { jsx, Button as Btn } from 'theme-ui';
import * as React from 'react';
import ButtonProps from '@exoTheme/components/Button/types';

const Button: React.FC<ButtonProps> = ({
  children,
  Icon,
  space,
  iconWidth,
  iconHeight,
  iconYPosition,
  iconXPosition,
  iconStyle,
  sx,
  ...props
}) => {
  return (
    <Btn
      {...props}
      sx={{
        width: Icon && 'max-content',
        display: Icon ? 'flex' : 'inline-block',
        gap: space || '0',
        alignItems: 'center',
        flexDirection: iconXPosition === 'left' ? 'row-reverse' : 'row',
        ...sx
      }}
    >
      {children}
      {Icon ? (
        <Icon
          sx={{
            ...{
              my: 0,
              width: iconWidth || '24px',
              height: iconHeight || 'auto',
              border: 'none',
              alignSelf: iconYPosition
            },
            ...iconStyle
          }}
        />
      ) : null}
    </Btn>
  );
};

export default Button;
