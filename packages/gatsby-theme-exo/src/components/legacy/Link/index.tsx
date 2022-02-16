/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC } from "react";
import { GatsbyLinkProps } from "gatsby";

import { StyledGatsbyLink } from "./styles";

const Link: FC<Omit<GatsbyLinkProps<Record<string, unknown>>, "ref">> = (
  props,
  { theme }
) => {
  if (props?.to?.startsWith("http")) {
    return (
      <a {...props} href={props.to} sx={theme?.activeLink}>
        {props.children}
      </a>
    );
  }

  return <StyledGatsbyLink {...props}>{props.children}</StyledGatsbyLink>;
};

export default Link;
