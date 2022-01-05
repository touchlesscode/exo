import * as React from 'react';
import ExpendableCard from '@exoTheme/components/Card/variants/expendable';
import { Box, Flex } from 'theme-ui';
import TextBlock from '@exoTheme/components/TextBlock';
import GatsbyImage from '@exoTheme/components/GatsbyImage';
import { CardWithSlidingHeaderProps } from '@exoTheme/components/Card/types';
import SliderWheel from '@exoTheme/components/Slider/variants/SliderWheel';

const CardWithSlidingHeader: React.FC<CardWithSlidingHeaderProps> = ({
  children,
  images,
  content,
  sliderOptions,
  sliderPosition = 'top',
  ...props
}) => {
  const sliderNewOptions = {
    ...sliderOptions,
    options: {
      ...sliderOptions?.options,
      drag: props.expended ? false : true
    }
  };
  return (
    <ExpendableCard {...props}>
      <Flex
        sx={{
          flexDirection: sliderPosition === 'top' ? 'column' : 'column-reverse'
        }}
      >
        <SliderWheel {...sliderNewOptions} slideOnScrollingY>
          {images.map(({ image, id }) => (
            <GatsbyImage
              key={id}
              image={image}
              alt="test"
              objectFit="contain"
              sx={{
                height: '100%',
                minWidth: '20%'
              }}
            />
          ))}
        </SliderWheel>
        <Box
          sx={{
            p: 6
          }}
        >
          <TextBlock {...content} />
          {children}
        </Box>
      </Flex>
    </ExpendableCard>
  );
};

export default CardWithSlidingHeader;
