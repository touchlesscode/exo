import useTrapFocusInsideRef from '@hooks/useTrapFocusInside';
import useKeyPress from "@hooks/useKeyPress";
import * as React from 'react';
import { Box, BoxProps, Button } from 'theme-ui';

interface DropdownProps extends BoxProps {
  onSelect?: (val: unknown) => void;
  visible: boolean;
  onClose ?: () => void;
}

const Dropdown: React.ForwardRefRenderFunction<HTMLDivElement, React.PropsWithChildren<DropdownProps>> = ({
  onSelect,
  onClose,
  visible,
  children,
  sx
}, ref) => {
  const focusRef = useTrapFocusInsideRef(undefined, false)
  const escPressed = useKeyPress(["Esc", 'Escape']);

  React.useEffect(() => {
    onClose && onClose();
  }, [escPressed]);

  return visible ? (
    <Box
      ref={ref}
      sx={{
        position: 'absolute',
        top: 'calc(100% + 10px)',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'max-content',
        backgroundColor: '#fff',
        boxShadow: '0 12px 32px 0 rgba(26, 26, 26, 0.24)',
        borderRadius: '8px',
        py: '16px',
        ...sx
      }}
    >
      <Box
        ref={focusRef}
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {React.Children.map(children, (child => (
          <Button
            tabIndex={-1}
            onClick={(e) => onSelect && onSelect(e)}
            sx={{
              maxWidth: '230px',
              width: '100vw',
              background: 'none',
              borderRadius: 0,
              p: 0
            }}
          >
            {child}
          </Button>
        )))}
      </Box>
    </Box>
  ) : null
}

export default React.forwardRef(Dropdown);