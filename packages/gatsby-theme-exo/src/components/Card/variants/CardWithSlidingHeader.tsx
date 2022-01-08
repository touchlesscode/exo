import * as React from 'react';
import Card from '@exoTheme/components/Card';
import { Box, Flex } from 'theme-ui';
import TextBlock from '@exoTheme/components/TextBlock';
import { CardWithSlidingHeaderProps } from '@exoTheme/components/Card/types';
import SliderWheel from '@exoTheme/components/Slider/variants/SliderWheel';

const CardWithSlidingHeader: React.FC<CardWithSlidingHeaderProps> = ({
  children,
  content,
  options,
  sliderPosition = 'top',
  slideStyles,
  sliderParent,
  cardStyles,
  ...props
}) => {
  return (
    <Card {...props} cardStyles={{ ...{ pt: 6 }, ...cardStyles }}>
      <Flex
        sx={{
          ...{
            flexDirection:
              sliderPosition === 'top' ? 'column' : 'column-reverse'
          }
        }}
      >
        <SliderWheel
          options={options}
          slideStyles={slideStyles}
          sliderParent={sliderParent}
        >
          {children}
        </SliderWheel>
        <Box
          sx={{
            p: 6
          }}
        >
          <TextBlock {...content} />
        </Box>
      </Flex>
    </Card>
  );
};

export default CardWithSlidingHeader;
