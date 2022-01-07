import * as React from 'react';
import Card from '@exoTheme/components/Card';
import { Box, Flex } from 'theme-ui';
import TextBlock from '@exoTheme/components/TextBlock';
import GatsbyImage from '@exoTheme/components/GatsbyImage';
import { CardWithSlidingHeaderProps } from '@exoTheme/components/Card/types';
import SliderWheel from '@exoTheme/components/Slider/variants/SliderWheel';

const CardWithSlidingHeader: React.FC<CardWithSlidingHeaderProps> = ({
  children,
  images,
  content,
  options,
  sliderPosition = 'top',
  slideStyles,
  cardStyles,
  ...props
}) => {
  return (
    <Card {...props} cardStyles={cardStyles}>
      <Flex
        sx={{
          ...{
            flexDirection:
              sliderPosition === 'top' ? 'column' : 'column-reverse'
          }
        }}
      >
        <SliderWheel options={options} slideStyles={slideStyles}>
          {images.map(({ image, id }) => (
            <GatsbyImage
              key={id}
              image={image}
              alt="test"
              objectFit="contain"
              sx={{
                height: '100%',
                width: '100%'
              }}
            />
          ))}
        </SliderWheel>
        <Box
          sx={{
            p: 6
          }}
        >
          {children ? children : <TextBlock {...content} />}
        </Box>
      </Flex>
    </Card>
  );
};

export default CardWithSlidingHeader;
