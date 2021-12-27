import * as React from 'react';
import { Flex, ThemeUIStyleObject } from 'theme-ui';
import GatsbyImage from '../GatsbyImage';
import GatsbyImagePropsType from '../GatsbyImage/types';
import Typography from '../Typography';

interface ImageWithLabelProps extends GatsbyImagePropsType {
  sx?: ThemeUIStyleObject;
  label: string;
  imageWidth?: string;
  imageVariant?: string;
}

const ImageWithLabel: React.FC<ImageWithLabelProps> = ({
  sx,
  as,
  label,
  imageWidth = '100px',
  imageVariant,
  ...props
}) => {
  return (
    <Flex
      as={as}
      sx={{
        height: '72px',
        justifyContent: 'start',
        alignItems: 'center',
        gap: 6,
        ...sx
      }}
    >
      <GatsbyImage
        {...props}
        variant={imageVariant}
        sx={{ width: imageWidth }}
      />
      <Typography
        sx={{
          fontSize: 20
        }}
      >
        {label}
      </Typography>
    </Flex>
  );
};

export default ImageWithLabel;
