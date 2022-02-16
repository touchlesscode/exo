/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";

import DividerProps from "@components/Divider/types";
import { Box, HeadingProps } from "theme-ui";
import Divider from "@components/Divider";
import Typography from "@components/Heading";

export interface TypographyLineProps
  extends Omit<DividerProps, "color">,
    HeadingProps {
  align?: "top" | "bottom";
  lineColor?: string;
  props?: HeadingProps;
}

const TypographyWithLine: React.FC<TypographyLineProps> = ({
  children,
  variant,
  lineColor,
  color,
  align,
  justify,
  width,
  height,
  space,
  ...props
}) => {
  return (
    <Box
      sx={{
        width: "fit-content",
        display: "flex",
        gap: space,
        flexDirection: align === "top" ? "column" : "column-reverse",
        color,
      }}
    >
      <Divider
        visible
        variant={variant}
        justify={justify}
        width={width}
        height={height}
        color={lineColor}
      />
      <Typography {...props}>{children}</Typography>
    </Box>
  );
};

export default TypographyWithLine;

TypographyWithLine.defaultProps = {
  color: "inherit",
  align: "top",
  justify: "left",
  width: "70%",
  height: "1",
  space: "2",
};
