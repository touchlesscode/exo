import * as React from 'react';
import Card from '@exoTheme/components/Card';
import { CardProps } from '@exoTheme/components/Card/types';
import { Flex, Box, ThemeUIStyleObject } from 'theme-ui';
import GatsbyImage from '@exoTheme/components/GatsbyImage';
import { GatsbyImageProps } from 'gatsby-plugin-image';
import Overlay from '@exoTheme/components/Overlay';

interface CardWithImageProps extends GatsbyImageProps {
  imagePosition?: 'top' | 'bottom';
  imageSx?: ThemeUIStyleObject;
  cardStyles?: ThemeUIStyleObject;
}

const CardWithImage: React.FC<CardWithImageProps & CardProps> = ({
  children,
  imagePosition = 'top',
  image,
  alt,
  imageSx,
  cardStyles,
  overlay,
  overlayed,
  ...props
}) => {
  return (
    <Card {...props} cardStyles={cardStyles}>
      <Flex
        sx={{
          flexDirection: imagePosition === 'top' ? 'column' : 'column-reverse'
        }}
      >
        {overlayed ? <Overlay {...overlay} zIndex="1" /> : null}
        <Box>
          <GatsbyImage image={image} sx={imageSx} alt={alt} />
        </Box>
        <Box>{children}</Box>
      </Flex>
    </Card>
  );
};

export default CardWithImage;
