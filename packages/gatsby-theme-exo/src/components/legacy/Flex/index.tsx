/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { Flex as ThemeFlex, FlexProps as ThemeFlexProps } from "theme-ui";

interface FlexProps extends ThemeFlexProps {
  gap?: number | string | NonEmptyArray<string>;
  direction?:
    | "row"
    | "row-reverse"
    | "column"
    | "column-reverse"
    | NonEmptyArray<"row" | "row-reverse" | "column" | "column-reverse">;
  justify?: string | NonEmptyArray<string>;
  align?: string | NonEmptyArray<string>;
}

const Flex: React.FC<FlexProps> = (props) => {
  const { gap, direction, justify, align, sx } = props;
  return (
    <ThemeFlex
      {...props}
      sx={{
        gap,
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        ...sx,
      }}
    ></ThemeFlex>
  );
};

export default Flex;
