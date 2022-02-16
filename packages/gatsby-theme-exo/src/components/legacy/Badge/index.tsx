/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { Badge as ThemeBadge, BadgeProps } from "theme-ui";

const Badge: React.FC<BadgeProps> = ({ children, sx, as = "p", ...props }) => {
  return (
    <ThemeBadge
      {...props}
      as={as}
      sx={{
        fontSize: "revert",
        ...sx,
      }}
    >
      {children}
    </ThemeBadge>
  );
};

export default Badge;
