/** @jsx jsx */
import { jsx, Button as Btn, Theme, get } from 'theme-ui';
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
  hasActive = true,
  hasHover = true,
  activeSx,
  hoverSx,
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
        transitionProperty: (theme: Theme) =>
          get(theme, 'transitions.property.default'),
        transitionDuration: (theme: Theme) =>
          get(theme, 'transitions.duration.500'),
        ...(hasHover && {
          '&:hover': {
            filter: 'brightness(105%) saturate(105%)',
            boxShadow: 'inset 0 0 100px 100px rgba(255, 255, 255, 0.1)',
            ...hoverSx
          }
        }),
        ...(hasActive && {
          '&:active': {
            filter: 'brightness(90%) saturate(90%)',
            ...activeSx
          }
        }),
        ...sx
      }}
    >
      {children}
      {Icon ? (
        <Icon
          sx={{
            my: 0,
            width: iconWidth || '24px',
            height: iconHeight || 'auto',
            border: 'none',
            alignSelf: iconYPosition
          }}
        />
      ) : null}
    </Btn>
  );
};

export default Button;
