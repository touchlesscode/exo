import { DividerProps as ThemeDividerProps } from 'theme-ui';

interface DividerProps extends ThemeDividerProps {
  visible?: boolean;
  variant?: string;
  width?: string;
  height?: string;
  color?: string;
  justify?: 'left' | 'right';
  space?: string;
}
export default DividerProps;
