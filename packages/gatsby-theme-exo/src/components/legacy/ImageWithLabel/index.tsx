/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { Flex } from "theme-ui";
import { Link } from "gatsby";
import GatsbyImage from "@components/GatsbyImage";
import Typography from "@components/Heading";
import { ImageWithLabelProps } from "./types";

const ImageWithLabel: React.FC<ImageWithLabelProps> = ({
  sx,
  label,
  height = "55px",
  imageWidth = "75px",
  imageVariant,
  labelStyle,
  imageStyles,
  withLinks,
  linkState,
  to,
  ...props
}) => {
  return withLinks ? (
    <Link
      to={to || "/"}
      state={linkState}
      sx={{
        height,
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        gap: 6,
        ...sx,
      }}
    >
      <GatsbyImage
        {...props}
        sx={{
          ...{
            width: imageWidth,
            minWidth: imageWidth,
            maxWidth: imageWidth,
            variant: `images.${imageVariant}`,
          },
          ...imageStyles,
        }}
      />
      <Typography
        sx={{
          ...{
            fontSize: 15,
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "20px",
            letterSpacing: "-0.02em",
            color: "#151F2A",
            textAlign: "left",
          },
          ...labelStyle,
        }}
      >
        {label}
      </Typography>
    </Link>
  ) : (
    <Flex
      sx={{
        height,
        justifyContent: "start",
        alignItems: "center",
        gap: "24px",
        ...sx,
      }}
    >
      <GatsbyImage
        {...props}
        sx={{
          ...{
            width: imageWidth,
            minWidth: imageWidth,
            maxWidth: imageWidth,
            variant: `images.${imageVariant}`,
          },
          ...imageStyles,
        }}
      />
      <Typography
        sx={{
          ...{
            fontSize: 15,
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "20px",
            letterSpacing: "-0.02em",
            color: "#151F2A",
            textAlign: "left",
          },
          ...labelStyle,
        }}
      >
        {label}
      </Typography>
    </Flex>
  );
};

export default ImageWithLabel;
