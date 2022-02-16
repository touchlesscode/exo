import { ThemeUIStyleObject } from "theme-ui";
import { GatsbyImageProps as GatsbyImagePropsType } from "gatsby-plugin-image";
import React from "react";

export interface ImageWithLabelProps extends GatsbyImagePropsType {
  sx?: ThemeUIStyleObject;
  label: string;
  imageWidth?: string;
  imageVariant?: string;
  height?: string;
  labelStyle?: ThemeUIStyleObject;
  imageStyles?: ThemeUIStyleObject;
  withLinks?: boolean;
  linkState?: any;
  to?: string;
}
