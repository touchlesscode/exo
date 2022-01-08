import * as React from 'react';
import { Box } from 'theme-ui';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { SliderProps } from '@exoTheme/components/Slider/types';
interface Props extends SliderProps {
  children: React.ReactNode;
}
const Slider: React.FC<Props> = ({
  options,
  plugins,
  slideStyles,
  sliderParent,
  sliderItem,
  children
}) => {
  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      ...options
    },
    plugins
  );

  return (
    <Box ref={ref} className="keen-slider" sx={sliderParent}>
      {React.Children.map(children, (child) => (
        <Box className={'keen-slider__slide'} sx={sliderItem}>
          <Box sx={slideStyles}>{child}</Box>
        </Box>
      ))}
    </Box>
  );
};

export default Slider;
