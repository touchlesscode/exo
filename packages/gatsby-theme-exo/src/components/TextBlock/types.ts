import { ThemeUIStyleObject } from 'theme-ui';
import TypographyProps from '@exoTheme/components/Typography/types';
import { TypographyLineProps } from '@exoTheme/components/Typography/variants/TypographyWithLine';

type TextBlockTypography = TypographyProps & {
  withLine?: boolean;
  line?: TypographyLineProps;
};

interface TextBlockProps {
  heading?: string;
  text?: string;
  headingProps?: TextBlockTypography;
  textProps?: TextBlockTypography;
  sx?: ThemeUIStyleObject;
}

export default TextBlockProps;
