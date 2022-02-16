/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC } from "react";
import { ThemeUIStyleObject } from "theme-ui";
import {
  getImage,
  GatsbyImage as NativeGatsbyImage,
} from "gatsby-plugin-image";
import GatsbyImageProps from "./types";
interface ExtraProps {
  loading?: "eager" | "lazy";
  sx?: ThemeUIStyleObject;
}
interface NativeGatsbyImageProps extends GatsbyImageProps, ExtraProps {}

const GatsbyImage: FC<NativeGatsbyImageProps> = ({
  as,
  alt,
  className,
  imgClassName,
  image,
  imgStyle,
  backgroundColor,
  objectFit,
  objectPosition,
  onLoad,
  onError,
  loading = "lazy",
  sx,
  ...props
}) => {
  const imageData = image ? getImage(image) : null;
  return imageData ? (
    <NativeGatsbyImage
      as={as}
      image={imageData}
      className={className}
      imgClassName={imgClassName}
      imgStyle={imgStyle}
      backgroundColor={backgroundColor}
      objectFit={objectFit}
      objectPosition={objectPosition}
      onLoad={onLoad}
      onError={onError}
      alt={alt}
      loading={loading}
      style={sx as React.CSSProperties}
      onContextMenu={() => {
        return false;
      }}
      {...props}
    />
  ) : null;
};

export default GatsbyImage;
