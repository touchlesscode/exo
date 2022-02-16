/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { Box, ThemeUIStyleObject } from "theme-ui";
import GatsbyImage from "@components/GatsbyImage";
import { GatsbyImageProps } from "gatsby-plugin-image";

interface GatsbyImageBgProps extends GatsbyImageProps {
  height?: string;
  width?: string;
  ImageBgSx?:ThemeUIStyleObject;
  imageSx?: ThemeUIStyleObject;
  sx?: ThemeUIStyleObject;
}

const GatsbyImageBg: React.FC<GatsbyImageBgProps> = ({
  children,
  height = "100%",
  width = "100%",
  ImageBgSx,
  imageSx,
  sx,
  ...props
}) => {
  return (
    <Box
      sx={{...{
        position: "relative",
        height,
        width,
      },
      ...ImageBgSx
    }}
    >
      <GatsbyImage
        {...props}
        aria-hidden={true}
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          ...imageSx,
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          ...sx,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default GatsbyImageBg;
