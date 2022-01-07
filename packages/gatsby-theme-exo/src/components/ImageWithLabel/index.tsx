import * as React from 'react';
import { Flex } from 'theme-ui';
import GatsbyImage from '../GatsbyImage';
import Typography from '../Typography';
import { ImageWithLabelProps } from '@exoTheme/components/ImageWithLabel/types';

const ImageWithLabel: React.FC<ImageWithLabelProps> = ({
  sx,
  label,
  height = '72px',
  imageWidth = '100px',
  imageVariant,
  labelStyle,
  ...props
}) => {
  return (
    <Flex
      sx={{
        height,
        justifyContent: 'start',
        alignItems: 'center',
        gap: 6,
        ...sx
      }}
    >
      <GatsbyImage
        {...props}
        variant={imageVariant}
        sx={{ width: imageWidth, minWidth: imageWidth, maxWidth: imageWidth }}
      />
      <Typography
        sx={{
          ...{
            fontSize: 20
          },
          ...labelStyle
        }}
      >
        {label}
      </Typography>
    </Flex>
  );
};

export default ImageWithLabel;
