/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { Box } from "theme-ui";
import Typography from "@components/Heading";
import TextBlockProps from "@components/TextBlock/types";
import TypographyWithLine from "@components/Heading/variants/TypographyWithLine";

const TextBlock: React.FC<TextBlockProps> = ({
  heading,
  text,
  headingProps,
  textProps,
  sx,
}) => {
  const HeadingTag = headingProps?.withLine ? TypographyWithLine : Typography;
  const TextTag = textProps?.withLine ? TypographyWithLine : Typography;
  const { line: headerLine, sx: headerSx } = headingProps || {};
  const { line: textLine, sx: textSx } = textProps || {};

  return (
    <Box sx={sx}>
      {heading ? (
        <HeadingTag as="h3" {...headerLine} sx={headerSx}>
          {heading}
        </HeadingTag>
      ) : null}
      {text ? (
        <TextTag {...textLine} sx={textSx}>
          {text}
        </TextTag>
      ) : null}
    </Box>
  );
};

export default TextBlock;
