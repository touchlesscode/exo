import * as React from 'react';
import Card from '@exoTheme/components/Card';
import { Box } from 'theme-ui';
import { keyframes } from '@emotion/react';
import useTimeout from '@exoTheme/hooks/useTimeout';
import useLockedBody from '@exoTheme/hooks/useLockedBody';
import { BoundingClientRecType } from '@exoTheme/types/index';
import useWindowVh from '@exoTheme/hooks/useWindowVh';
import {
  ExpandableCardProps,
  ExpandToType
} from '@exoTheme/components/Card/types';
import DefaultCloseIcon from '@exoTheme/images/icons/close.inline.svg';
import Button from '@exoTheme/components/Button';
import Overlay from '@exoTheme/components/Overlay';
import useWindowSize from '@exoTheme/hooks/useWindowSize';

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
    duration = 150,
    CloseIcon,
    expandTo,
    parentStyles,
    expandedStyles,
    ...props
  },
  ref
) => {
  const isMobile = useWindowSize()?.type === 'sm';
  useWindowVh();
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
      sx={{
        ...{
          height: expanded ? initialRect?.height : '100%'
        },
        ...parentStyles
      }}
      onClick={!expanded ? handleOnClick : undefined}
    >
      <Overlay
        color="rgba(0,0,0,0.4)"
        position="fixed"
        onClick={handleOnClose}
        sx={{
          cursor: 'pointer',
          backdropFilter: 'blur(64px)',
          display: isMobile ? 'none' : 'bolck',
          zIndex: '10'
        }}
        visible={expanded ? true : false}
        animated={expanded ? true : false}
      />
      <Box
        ref={expandingRef}
        sx={{
          ...{
            width: '100%',
            height: '100%',
            animation: expanded
              ? `${expandAnimation(
                  expandTo,
                  initialRect
                )} ${duration}ms forwards` // add animation to expanding
              : willCollapse
              ? `${collapseAnimation(
                  initialRect,
                  endRect
                )} ${duration}ms forwards` // add animation to collapsing
              : 'none', // when in initial state.
            willChange: 'top left right width transform',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxShadow: '0px 8px 24px 0px rgb(84 84 84 / 26%)',
            borderRadius: '16px'
          },
          ...expandedStyles
        }}
      >
        <Box
          sx={{
            width: '100%',
            height:
              !expanded && !willCollapse
                ? '100%' // set to 100% when the card is not expanded and not collapsing. / initial state.
                : expanded && !willCollapse
                ? 'fill-available' // set to max-content when the card is expanded.
                : !expanded && willCollapse && initialRect?.height, // set to initial height when the card is collapsing.
            maxWidth: ['100%', '100%', `${expanded ? '572px' : '100%'}`],
            maxHeight: ['100%', '100%', `${expanded ? '718px' : '100%'}`],
            m: 'auto',
            position: 'relative',
            zIndex: '1',
            borderRadius: expanded ? [0, 0, '16px'] : '16px',
            overflow: 'hidden'
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
  expandTo?: ExpandToType,
  rect?: BoundingClientRecType
) =>
  keyframes({
    from: {
      position: 'fixed',
      top: rect?.top || 0,
      left: rect?.left || 0,
      width: rect?.width || '100%',
      height: rect?.height || '100vh',
      transform: expandTo?.transform || 'translate(0, 0)',
      maxHeight: 'calc(var(--vh, 1vh) * 100)',
      zIndex: '12',
      margin: '0 auto'
    },
    to: {
      position: 'fixed',
      zIndex: '12',
      bottom: 0,
      height: expandTo?.height || 'calc(var(--vh, 1vh) * 100)',
      maxHeight: 'calc(var(--vh, 1vh) * 100)',
      top: expandTo?.top || '50%',
      left: expandTo?.left || '50%',
      width: expandTo?.width || '100%',
      transform: expandTo?.transform || 'translate(-50%, -50%)',
      margin: '0 auto'
    }
  });
const collapseAnimation = (
  rect: BoundingClientRecType | undefined,
  endRect: BoundingClientRecType | undefined
) =>
  keyframes({
    from: {
      position: 'fixed',
      top: endRect?.top,
      left: endRect?.left,
      width: endRect?.width,
      height: 'calc(var(--vh, 1vh) * 100)',
      zIndex: '12'
    },
    to: {
      position: 'fixed',
      top: rect?.top,
      left: rect?.left,
      width: rect?.width,
      height: rect?.height,
      zIndex: '12'
    }
  });
