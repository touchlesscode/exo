/** @jsx jsx */
import { jsx, Card as ThemeCard, Box } from 'theme-ui';
import * as React from 'react';
import Overlay from '@exoTheme/components/Overlay';
import Button from '../Button';
import DefaultCloseIcon from '@exoTheme/images/icons/close.inline.svg';

// types
import { CardProps } from '@exoTheme/components/Card/types';
import { BoundingClientRecType } from '@exoTheme/types/index';

// Helpers
import getCardStyles from '@exoTheme/components/Card/helpers';
import useLockedBody from '@exoTheme/hooks/useLockedBody';
import { initialBoundingClientRect } from '@exoTheme/hooks/useBoundingClientRectRef';
import useKeyPress from '@exoTheme/hooks/useKeyPress';
import useTrapFocusInsideRef from '@exoTheme/hooks/useTrapFocusInsideRef';

const Card: React.FC<CardProps> = (props) => {
  const {
    children,
    variant,
    expendable,
    expended,
    onClick,
    onClose,
    closeBtnSx,
    bgImage,
    bgOverlay,
    duration,
    timingFunc,
    shadow,
    expendTo,
    CloseIcon,
    sx,
    ...rest
  } = props;

  const [, setLocked] = useLockedBody();
  const parentRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  const ref = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  const [isFullScreen, setIsFullScreen] = React.useState(false);
  const escPressed = useKeyPress(['Escape', 'Esc'], ref);
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

  const handleOnClick = () => {
    if (expended || !expendable || isFullScreen) return;
    if (ref.current) {
      // store the latest BoundingClientRect before going fullScreen
      const rect = ref.current.getBoundingClientRect();
      setPosition(rect);
    }

    /* expended === true, will apply getWillExpendStyles styles */
    onClick ? onClick() : null;

    /* Lock scrolling until expended is false */
    setLocked(true);

    /* isFullscreen === true, will apply getExpendedStyles */
    setTimeout(function () {
      setIsFullScreen(true);
    }, 10);
  };

  // Trap focus inside card when expended
  useTrapFocusInsideRef(ref, isFullScreen);

  // Close card when esc key pressed
  React.useEffect(() => {
    if (!escPressed) return;
    onClose && onClose();
  }, [escPressed]);

  const accessibilityAttrs = expendable
    ? {
        ...(isFullScreen
          ? {
              'aria-modal': true,
              role: 'button',
              'aria-pressed': true,
              'aria-expanded': true
            }
          : {
              'data-toggle': 'modal',
              'aria-pressed': false,
              'aria-expanded': false,
              role: 'button'
            })
      }
    : {};

  return (
    <Box
      tabIndex={-1}
      ref={parentRef}
      sx={
        isFullScreen || expended
          ? {
              height: position.height && `${position.height}px`,
              position: 'relative'
            }
          : { width: '100%', height: '100%' }
      }
    >
      <Overlay
        tabIndex={-1}
        animated
        onClick={isFullScreen || expended ? onClose : undefined}
        visible={!!(isFullScreen && expended)}
        color={bgOverlay}
        image={bgOverlay}
        position="fixed"
      />
      <ThemeCard
        {...accessibilityAttrs}
        {...rest}
        sx={{
          ...getCardStyles({
            position,
            isFullScreen,
            transitionProps: { duration, timingFunc },
            expendable,
            expended,
            expendTo,
            bgImage,
            sx
          }),
          boxShadow: shadow
        }}
        ref={ref}
        variant={variant}
        onKeyPress={handleOnClick}
        onClick={handleOnClick}
        onTransitionEnd={isAnimationEnded}
      >
        <>
          {children}
          {expended && onClose ? (
            <Button
              Icon={CloseIcon || DefaultCloseIcon}
              onClick={onClose}
              data-dismiss="modal"
              aria-label="Close"
              sx={{
                borderRadius: '100%',
                position: 'absolute',
                top: '20px',
                right: '20px',
                zIndex: 2,
                bg: 'white',
                p: 1,
                svg: {
                  color: 'black'
                },
                ...closeBtnSx
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
  bg: 'white'
};
