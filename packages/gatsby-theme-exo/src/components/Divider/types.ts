import { DividerProps as ThemeDividerProps } from 'theme-ui';

interface DividerProps extends Omit<ThemeDividerProps, 'color'> {
  visible?: boolean;
  variant?: string;
  width?: string | NonEmptyArray<string>;
  height?: string;
  color?: string | NonEmptyArray<string>;
  justify?: 'left' | 'right';
  space?: string | NonEmptyArray<string>;
}
export default DividerProps;
