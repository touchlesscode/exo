/** @jsx jsx */
import { jsx, Card as ThemeCard, Close, Box } from 'theme-ui';
import * as React from 'react';
import Overlay from '@exoTheme/components/Overlay';

// types
import { CardProps } from '@exoTheme/components/Card/types';
import { BoundingClientRecType } from '@exoTheme/customTypes/index';

// Helpers
import getCardStyles from '@exoTheme/components/Card/helpers';
import useLockedBody from '@exoTheme/hooks/useLockedBody';
import { initialBoundingClientRect } from '@exoTheme/hooks/useBoundingClientRectRef';

const Card: React.FC<CardProps> = (props) => {
  const {
    children,
    variant,
    expendable,
    expended,
    onClick,
    onClose,
    color,
    as,
    sx,
    bgColor,
    bgImage,
    bgOverlay,
    durations,
    timingFuncs,
    boxShadow,
    expendTo
  } = props;

  const [, setLocked] = useLockedBody();
  const parentRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  const ref = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  const [isFullScreen, setIsFullScreen] = React.useState(false);
  const [position, setPosition] = React.useState<BoundingClientRecType>(
    initialBoundingClientRect
  );

  // Turn back the card to static after onClose transition ends.
  const isAnimationEnded = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (expended || !isFullScreen || e.target !== ref.current) return;
    setIsFullScreen(false);

    /* unlock scrolling */
    setLocked(false);
  };

  const handleOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (expended || !expendable || isFullScreen) return;
    if (ref.current) {
      // store the latest BoundingClientRect before going fullScreen
      const rect = ref.current.getBoundingClientRect();
      setPosition(rect);
    }

    /* expended === true, will apply getWillExpendStyles styles */
    onClick ? onClick(e) : null;

    /* Lock scrolling until expended is false */
    setLocked(true);

    /* isFullscreen === true, will apply getExpendedStyles */
    setTimeout(function () {
      setIsFullScreen(true);
    }, 10);
  };

  return (
    <Box
      ref={parentRef}
      sx={{
        width: '100%',
        height:
          position.height && (isFullScreen || expended)
            ? `${position.height}px`
            : '100%'
      }}
    >
      <Overlay
        visible={!!(isFullScreen && expendTo)}
        color={bgOverlay}
        image={bgOverlay}
        position="fixed"
      />
      <ThemeCard
        as={as}
        color={color}
        ref={ref}
        variant={variant}
        bg={bgColor}
        onClick={handleOnClick}
        onTransitionEnd={isAnimationEnded}
        sx={{
          ...getCardStyles(
            position,
            isFullScreen,
            { durations, timingFuncs },
            bgImage,
            expendable,
            expended,
            expendTo
          ),
          boxShadow,
          ...sx
        }}
      >
        <>
          <div
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%'
            }}
          >
            {children}
          </div>
          {expended ? (
            <Close
              onClick={onClose}
              sx={{
                borderRadius: '100%',
                position: 'absolute',
                top: '20px',
                right: '20px',
                zIndex: 2,
                svg: {
                  color: 'black'
                }
              }}
            />
          ) : null}
        </>
      </ThemeCard>
    </Box>
  );
};

export default Card;

Card.defaultProps = {
  as: 'div',
  bgColor: 'white'
};
