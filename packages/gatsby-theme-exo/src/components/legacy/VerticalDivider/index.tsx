/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC } from "react";

import { DividerPropType } from "./type";
import { StyledVerticalDivider } from "./style";

export const VerticalDivider: FC<DividerPropType> = ({
  type = "default",
  ...props
}) => {
  return type === "default" ? <StyledVerticalDivider {...props} /> : null;
};
export default VerticalDivider;
