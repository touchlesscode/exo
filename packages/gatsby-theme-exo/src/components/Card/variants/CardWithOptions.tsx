import React, { useState, useEffect } from 'react';
import Card from '@exoTheme/components/Card';
import { CardProps } from '@exoTheme/components/Card/types';
import { ThemeUIStyleObject } from 'theme-ui';
// import { Box, useThemeUI, Theme, get } from 'theme-ui';
import { keyframes } from '@emotion/react';
import Button from '@exoTheme/components/Button';
import whiteCloseIcon from '@exoTheme/images/icons/close_white.inline.svg';

interface Props {
  origin: 'left' | 'center' | 'right' | '';
  cardStyles?: ThemeUIStyleObject;
  onClose?: () => void;
  show?: boolean;
}

const CardWithOptions: React.FC<Props & CardProps> = ({
  children,
  cardStyles,
  origin,
  show,
  onClose,
  ...props
}) => {
  const [onAnimation, setOnAnimation] = useState(false);
  useEffect(() => {
    if (show) setOnAnimation(true);
    if (!show) setTimeout(() => setOnAnimation(false), 120);
  }, [show]);
  return (
    <Card
      {...props}
      cardStyles={{
        ...{
          position: 'absolute',
          top: 0,
          left: origin === 'left' ? 0 : origin === 'center' ? '50%' : 'unset',
          right: origin === 'right' ? 0 : 'unset',
          display: onAnimation ? 'block' : 'none',
          animation: `${
            show
              ? expandAnimation(origin as 'left' | 'center' | 'right')
              : collapseAnimation(origin as 'left' | 'center' | 'right')
          } 120ms forwards`,
          willChange: 'width, left',
          width: '0',
          height: '100%',
          bg: '#18152A',
          zIndex: '3'
        },
        ...cardStyles
      }}
    >
      <Button
        Icon={whiteCloseIcon}
        onClick={(e) => {
          onClose && onClose();
          e.preventDefault();
          e.stopPropagation();
        }}
        sx={{
          position: 'absolute',
          right: 6,
          top: 6,
          zIndex: 3,
          p: 1,
          width: 6,
          height: 6,
          borderRadius: '100px',
          bg: 'transparent'
        }}
      />
      {children}
    </Card>
  );
};

export default CardWithOptions;
const expandAnimation = (origin: 'left' | 'center' | 'right') =>
  keyframes({
    from: {
      left: origin == 'center' ? '50%' : origin == 'left' ? '0' : 'unset',
      width: 0
    },
    to: {
      left: origin == 'center' ? '0' : origin == 'left' ? '0' : 'unset',
      width: '100%'
    }
  });
const collapseAnimation = (origin: 'left' | 'center' | 'right') =>
  keyframes({
    from: {
      left: origin == 'center' ? '0' : origin == 'left' ? '0' : 'unset',
      width: '100%'
    },
    to: {
      left: origin == 'center' ? '50%' : origin == 'left' ? '0' : 'unset',
      width: 0
    }
  });
