import * as React from 'react';
import Card from '@exoTheme/components/Card';
import { Box, Flex, ThemeUIStyleObject } from 'theme-ui';
import GatsbyImage from '@exoTheme/components/GatsbyImage';
import Typography from '@exoTheme/components/Typography';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import Slider from '@exoTheme/components/Slider';
import { SliderProps } from '@exoTheme/components/Slider/types';

interface CardWithSlidingHeaderProps {
  images: {
    image: IGatsbyImageData;
    id: string;
  }[];
  title?: string;
  description?: string;
  sx?: ThemeUIStyleObject;
  sliderOptions?: SliderProps;
  sliderPosition?: 'top' | 'bottom';
}

const CardWithSlidingHeader: React.FC<CardWithSlidingHeaderProps> = ({
  children,
  images,
  title,
  description,
  sliderOptions,
  sliderPosition = 'top',
  sx
}) => {
  return (
    <Card
      shadow="full-md"
      variant="rounded"
      sx={{
        overflow: 'hidden',
        ...sx
      }}
    >
      <Flex
        sx={{
          flexDirection: sliderPosition === 'top' ? 'column' : 'column-reverse'
        }}
      >
        <Slider {...sliderOptions} slideOnScrollingY>
          {images.map(({ image, id }) => (
            <GatsbyImage
              key={id}
              image={image}
              alt="test"
              objectFit="contain"
              sx={{
                height: '65px',
                minWidth: '20%'
              }}
            />
          ))}
        </Slider>
        <Box
          sx={{
            p: 6
          }}
        >
          {children ? (
            children
          ) : (
            <>
              <Typography as="h4">{title}</Typography>
              <Typography sx={{ mt: 1 }}>{description}</Typography>
            </>
          )}
        </Box>
      </Flex>
    </Card>
  );
};

export default CardWithSlidingHeader;
