import * as React from 'react';
import Card from '@exoTheme/components/Card';
import { Box, useThemeUI, Theme, get } from 'theme-ui';
import { keyframes } from '@emotion/react';
import useTimeout from '@exoTheme/hooks/useTimeout';
import useLockedBody from '@exoTheme/hooks/useLockedBody';
import { BoundingClientRecType } from '@exoTheme/types/index';
import {
  ExpandableCardProps,
  ExpandToType
} from '@exoTheme/components/Card/types';
import DefaultCloseIcon from '@exoTheme/images/icons/close.inline.svg';
import Button from '@exoTheme/components/Button';
import Overlay from '@exoTheme/components/Overlay';

const ExpandableCard: React.ForwardRefRenderFunction<
  HTMLDivElement,
  React.PropsWithChildren<ExpandableCardProps>
> = (
  {
    children,
    parentRef,
    expanded,
    onClick,
    onClose,
    duration = 250,
    CloseIcon,
    expandTo,
    ...props
  },
  ref
) => {
  const { theme } = useThemeUI();

  const OverlayProps = props.overlayed
    ? { overlay: props.overlay, overlayed: props.overlayed }
    : {};

  const expandingRef = (ref ||
    React.useRef()) as React.MutableRefObject<HTMLDivElement>;
  const [initialRect, setInitialRect] = React.useState<BoundingClientRecType>(); // The start/initial position of the card before expanding
  const [endRect, setEndBox] = React.useState<BoundingClientRecType>(); // The position of the card after expanding, will animate from this onClose
  const [willCollapse, setWillCollapse] = React.useState(false); // animate collapsing of the card

  useLockedBody(expanded || willCollapse); // lock scrolling when expanded

  const handleOnClick = () => {
    onClick();
    parentRef &&
      parentRef.current &&
      setInitialRect(parentRef.current.getBoundingClientRect()); // set Initial position of the card
  };
  const handleOnClose = () => {
    setWillCollapse(true);
    onClose();
    expandingRef?.current &&
      setEndBox(expandingRef.current.getBoundingClientRect()); // Set the end position of the card, to animate closing from it.
  };

  useTimeout(() => setWillCollapse(false), willCollapse ? duration : 0); // update will collapse after the duration ends.

  return (
    <Box
      ref={parentRef}
      sx={{ height: expanded ? initialRect?.height : '100%' }}
      onClick={!expanded ? handleOnClick : undefined}
    >
      <Box
        ref={expandingRef}
        sx={{
          width: '100%',
          height: '100%',
          cursor: expanded ? 'auto' : 'pointer',
          animation: expanded
            ? `${expandAnimation(
                theme,
                expandTo,
                initialRect
              )} ${duration}ms forwards` // add animation to expanding
            : willCollapse
            ? `${collapseAnimation(
                theme,
                initialRect,
                endRect
              )} ${duration}ms forwards` // add animation to collapsing
            : 'none', // when in initial state.
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        {expanded && (
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
              !expanded && !willCollapse
                ? '100%' // set to 100% when the card is not expanded and not collapsing. / initial state.
                : expanded && !willCollapse
                ? 'fill-available' // set to max-content when the card is expanded.
                : !expanded && willCollapse && initialRect?.height, // set to initial height when the card is collapsing.
            maxWidth: ['100%', `${expanded ? '572px' : '100%'}`],
            maxHeight: ['100%', `${expanded ? '718px' : '100%'}`],
            m: ['auto', '20px auto'],
            position: 'relative',
            zIndex: '999',
            borderRadius: expanded ? [0, '16px'] : '0',
            overflow: expanded ? 'hidden' : 'visible'
          }}
        >
          <Card {...(expanded ? OverlayProps : props)}>
            {children}
            {expanded ? ( // render close button when expanded
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

export default React.forwardRef(ExpandableCard);

const expandAnimation = (
  theme: Theme,
  expandTo?: ExpandToType,
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
      top: expandTo?.top || 0,
      left: expandTo?.left || 0,
      right: expandTo?.right || 0,
      width: expandTo?.width || '100vw',
      transform: expandTo?.transform || 'none',
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
