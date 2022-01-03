import { BoxProps } from 'theme-ui';

interface OverlayProps extends BoxProps {
  color?: string;
  visible?: boolean;
  zIndex?: string | number;
  position?: 'fixed' | 'absolute';
  transitionDuration?: number;
  animated?: boolean;
  colors?: ColorsProps[];
}

export type ColorsProps =
  | {
      direction?: string;
      linear: NonEmptyArray<string> | NonEmptyArray<NonEmptyArray<string>>;
      radial?: never;
    }
  | {
      direction?: string;
      linear?: never;
      radial: NonEmptyArray<string> | NonEmptyArray<NonEmptyArray<string>>;
    };

export default OverlayProps;
