import { ThemeUIStyleObject } from 'theme-ui';
import TypographyProps from '@exoTheme/components/Typography/types';

interface TextBlockProps {
  heading?: string;
  text?: string;
  headingProps?: TypographyProps;
  textProps?: TypographyProps;
  sx?: ThemeUIStyleObject;
}

export default TextBlockProps;
