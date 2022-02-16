/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { Divider as ThemeDivider, Flex } from "theme-ui";
import DividerProps from "./types";

const Divider: React.FC<DividerProps> = ({
  visible = true,
  variant,
  width,
  height,
  justify,
  color,
  sx,
  ...props
}) => {
  return visible ? (
    <Flex
      sx={{
        justifyContent: justify === "right" ? "end" : "start",
      }}
    >
      <ThemeDivider
        {...props}
        color="inherit"
        variant={variant}
        sx={{
          my: 0,
          backgroundColor: color,
          minWidth: width,
          width,
          maxWidth: width,
          height,
          border: "none",
          zIndex: 1,
          ...sx,
        }}
      />
    </Flex>
  ) : null;
};

export default Divider;
Divider.defaultProps = {
  justify: "left",
  width: "70%",
  height: "4px",
  space: "6px",
  color: "currentColor",
};
