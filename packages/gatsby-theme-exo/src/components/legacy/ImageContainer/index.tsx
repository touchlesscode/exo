
import React, { FC } from "react";

import { ImageWrapper, ImageWrapperLink } from "./style"

interface LogoPropType {
  source: string
  alt: string
  url?: string
  objectFit?: string
}

const ImageContainer: FC<LogoPropType> = ({ source, url, alt, objectFit }) => {
  if (!!url) {
    return (
      <ImageWrapperLink to={url} objectFit={objectFit}>
        <img src={source} alt={alt} />
      </ImageWrapperLink>
    );
  }
  return (
    <ImageWrapper objectFit={objectFit}>
      <img src={source} alt={alt}  />
    </ImageWrapper>
  );
};

export default ImageContainer;

