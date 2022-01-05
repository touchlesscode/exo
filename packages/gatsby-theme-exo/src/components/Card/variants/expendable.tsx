import * as React from 'react';
import Card from '@exoTheme/components/Card';
import { Box, useThemeUI, Theme, get } from 'theme-ui';
import { keyframes } from '@emotion/react';
import useTimeout from '@exoTheme/hooks/useTimeout';
import useLockedBody from '@exoTheme/hooks/useLockedBody';
import { BoundingClientRecType } from '@exoTheme/types/index';
import {
  ExpendableCardProps,
  ExpendToType
} from '@exoTheme/components/Card/types';
import DefaultCloseIcon from '@exoTheme/images/icons/close.inline.svg';
import Button from '@exoTheme/components/Button';
import Overlay from '@exoTheme/components/Overlay';

const ExpendableCard: React.ForwardRefRenderFunction<
  HTMLDivElement,
  React.PropsWithChildren<ExpendableCardProps>
> = (
  {
    children,
    expended,
    onClick,
    onClose,
    duration = 250,
    CloseIcon,
    expendTo,
    ...props
  },
  ref
) => {
  const { theme } = useThemeUI();

  const OverlayProps = props.overlayed
    ? { overlay: props.overlay, overlayed: props.overlayed }
    : {};

  const parentRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  const expendingRef = (ref ||
    React.useRef()) as React.MutableRefObject<HTMLDivElement>;
  const [initialRect, setInitialRect] = React.useState<BoundingClientRecType>(); // The start/initial position of the card before expending
  const [endRect, setEndBox] = React.useState<BoundingClientRecType>(); // The position of the card after expending, will animate from this onClose
  const [willCollapse, setWillCollapse] = React.useState(false); // animate collapsing of the card

  useLockedBody(expended || willCollapse); // lock scrolling when expended

  const handleOnClick = () => {
    onClick();
    parentRef.current &&
      setInitialRect(parentRef.current.getBoundingClientRect()); // set Initial position of the card
  };
  const handleOnClose = () => {
    setWillCollapse(true);
    onClose();
    expendingRef?.current &&
      setEndBox(expendingRef.current.getBoundingClientRect()); // Set the end position of the card, to animate closing from it.
  };

  useTimeout(() => setWillCollapse(false), willCollapse ? duration : 0); // update will collapse after the duration ends.

  return (
    <Box
      ref={parentRef}
      sx={{ height: expended ? initialRect?.height : '100%' }}
      onClick={!expended ? handleOnClick : undefined}
    >
      <Box
        ref={expendingRef}
        sx={{
          width: '100%',
          height: '100%',
          cursor: expended ? 'auto' : 'pointer',
          animation: expended
            ? `${expendAnimation(
                theme,
                expendTo,
                initialRect
              )} ${duration}ms forwards` // add animation to expending
            : willCollapse
            ? `${collapseAnimation(
                theme,
                initialRect,
                endRect
              )} ${duration}ms forwards` // add animation to collapsing
            : 'none' // when in initial state.
        }}
      >
        {expended && (
          <Overlay
            color="rgba(0,0,0,0.4)"
            position="fixed"
            onClick={handleOnClose}
            sx={{
              cursor: 'pointer'
            }}
          />
        )}
        <Box
          sx={{
            width: '100%',
            height:
              !expended && !willCollapse
                ? '100%' // set to 100% when the card is not expended and not collapsing. / initial state.
                : expended && !willCollapse
                ? 'fill-available' // set to max-content when the card is expended.
                : !expended && willCollapse && initialRect?.height, // set to initial height when the card is collapsing.
            maxWidth: (theme) => theme?.breakpoints?.[2],
            maxHeight: (theme) => theme?.breakpoints?.[3],
            m: 'auto',
            position: 'relative',
            zIndex: 'infinity'
          }}
        >
          <Card {...(expended ? OverlayProps : props)}>
            {children}
            {expended ? ( // render close button when expended
              <Button
                Icon={CloseIcon || DefaultCloseIcon}
                onClick={handleOnClose}
                sx={{
                  position: 'absolute',
                  right: 6,
                  top: 6,
                  zIndex: 3,
                  p: 1,
                  width: 6,
                  height: 6,
                  borderRadius: '100px',
                  bg: 'white'
                }}
              />
            ) : null}
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default React.forwardRef(ExpendableCard);

const expendAnimation = (
  theme: Theme,
  expendTo?: ExpendToType,
  rect?: BoundingClientRecType
) =>
  keyframes({
    from: {
      position: 'fixed',
      top: rect?.top || 0,
      left: rect?.left || 0,
      width: rect?.width || '100vw',
      right: rect?.right || 0,
      height: rect?.height || '100vh',
      zIndex:
        get(theme, 'zIndices.infinity') ||
        get(theme, 'zIndices.1000') ||
        '100000000',
      margin: '0 auto'
    },
    to: {
      position: 'fixed',
      zIndex:
        get(theme, 'zIndices.infinity') ||
        get(theme, 'zIndices.1000') ||
        '100000000',
      bottom: 0,
      height: '100vh',
      top: expendTo?.top || 0,
      left: expendTo?.left || 0,
      right: expendTo?.right || 0,
      width: expendTo?.width || '100vw',
      transform: expendTo?.transform || 'none',
      margin: '0 auto'
    }
  });
const collapseAnimation = (
  theme: Theme,
  rect: BoundingClientRecType | undefined,
  endRect: BoundingClientRecType | undefined
) =>
  keyframes({
    from: {
      position: 'fixed',
      top: endRect?.top,
      left: endRect?.left,
      width: endRect?.width,
      zIndex:
        get(theme, 'zIndices.infinity') ||
        get(theme, 'zIndices.1000') ||
        '100000000'
    },
    to: {
      position: 'fixed',
      top: rect?.top,
      left: rect?.left,
      width: rect?.width,
      height: rect?.height,
      zIndex:
        get(theme, 'zIndices.infinity') ||
        get(theme, 'zIndices.1000') ||
        '100000000'
    }
  });
