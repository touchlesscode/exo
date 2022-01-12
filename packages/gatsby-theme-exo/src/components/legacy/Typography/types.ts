import { TextProps as ThemeTextProps, ThemeUIStyleObject } from 'theme-ui';
import DividerProps from '@exoTheme/components/legacy/Divider/types';

export interface TypographyLine extends DividerProps {
  align?: 'top' | 'bottom';
}

interface TypographyPropsTypes extends ThemeTextProps {
  sx?: ThemeUIStyleObject;
  withLine?: boolean;
  line?: TypographyLine;
}

export default TypographyPropsTypes;
