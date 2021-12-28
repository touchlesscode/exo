import { BoxProps } from 'theme-ui';

interface OverlayProps extends BoxProps {
  image?: string;
  color?: string;
  visible?: boolean;
  zIndex?: string | number;
  position?: 'fixed' | 'absolute';
  transitionDuration?: number;
  animated?: boolean;
}

export default OverlayProps;
