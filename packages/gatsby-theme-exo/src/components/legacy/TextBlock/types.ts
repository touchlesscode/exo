import { ThemeUIStyleObject, HeadingProps } from "theme-ui";
import { TypographyLineProps } from "@components/Heading/variants/TypographyWithLine";

type TextBlockTypography = HeadingProps & {
  withLine?: boolean;
  line?: TypographyLineProps;
  lineStyle?: ThemeUIStyleObject;
};

interface TextBlockProps {
  heading?: string;
  text?: string;
  headingProps?: TextBlockTypography;
  textProps?: TextBlockTypography;
  sx?: ThemeUIStyleObject;
}

export default TextBlockProps;
