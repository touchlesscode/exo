import * as React from 'react';
import { Box } from 'theme-ui';
import Typography from '@exoTheme/components/Typography';
import TextBlockProps from '@exoTheme/components/TextBlock/types';
import TypographyWithLine from '@exoTheme/components/Typography/variants/TypographyWithLine';

const TextBlock: React.FC<TextBlockProps> = ({
  heading,
  text,
  headingProps,
  textProps,
  sx
}) => {
  const HeadingTag = headingProps?.withLine ? TypographyWithLine : Typography;
  const TextTag = textProps?.withLine ? TypographyWithLine : Typography;
  const {
    line: headerLine,
    sx: headerSx,
    ...restHeaderProps
  } = headingProps || {};
  const { line: textLine, sx: textSx, ...restTextProps } = textProps || {};

  return (
    <Box sx={sx}>
      {heading ? (
        <HeadingTag as="h3" {...headerLine} sx={headerSx} {...restHeaderProps}>
          {heading}
        </HeadingTag>
      ) : null}
      {text ? (
        <TextTag {...textLine} sx={textSx} {...restTextProps}>
          {text}
        </TextTag>
      ) : null}
    </Box>
  );
};

export default TextBlock;
