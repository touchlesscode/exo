/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';
import {
  getImage,
  GatsbyImage as NativeGatsbyImage
} from 'gatsby-plugin-image';

// Types
import GatsbyImagePropsType from '@exoTheme/components/GatsbyImage/types';

const GatsbyImage: React.FC<GatsbyImagePropsType> = ({
  sx,
  image,
  ...props
}) => {
  const imageData = image ? getImage(image) : null;
  return imageData ? (
    <NativeGatsbyImage
      {...props}
      sx={{ width: '100%', height: '100%', ...sx }}
      image={imageData}
    />
  ) : null;
};

export default GatsbyImage;
